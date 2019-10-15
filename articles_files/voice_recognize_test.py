from pyAudioAnalysis.audioAnalysis import classifyFileWrapper, classifyFolderWrapper
from pyAudioAnalysis.audioTrainTest import classifierWrapper
from pyAudioAnalysis import audioTrainTest as aT
from pyAudioAnalysis.audioTrainTest import fileClassification
import subprocess,json, sys,os
from random import sample
from pathlib import Path


result_svm, result_svm_rbf = {},{}
result_randomforest,result_extratrees = {},{}
result_gradientboosting = {}

classifier_list = ["svm","gradientboosting","randomforest","extratrees"]

def add_test_to_json(correct,wrong,not_found,false_positive,type_):
    '''It receives the variables from the current test and adds it to one of 
    the classifier dictionaries that will later be written in the .json classifier'''
    global result_extratrees,result_gradientboosting
    global result_randomforest,result_svm,result_svm_rbf
    this_result = {'Correct':correct,
                        'Wrong':wrong,
                        'False_positive': str(false_positive),
                        'Not found':not_found}
    if(type_ == "svm"):
        name = len(result_svm)
        result_svm[name] = this_result
    elif(type_ == "svm_rbf"):
        name = "Test "+ str(len(result_svm_rbf))
        result_svm_rbf[0] = this_result

    elif(type_ == "extratrees"):
        name = len(result_extratrees)
        result_extratrees[name] = this_result

    elif(type_ == "gradientboosting"):
        name = len(result_gradientboosting)
        result_gradientboosting[name] = this_result

    elif(type_ == "randomforest"):
        name = len(result_randomforest)
        result_randomforest[name] = this_result
    

def final_result(type_):
    '''It calculates the total amount of correct, wrong and not found,
     and adds to the dictionary Final Result that added dictionary referring to the 
     classifiers and finally writes that whole dictionary of the classifier in an .json 
     file with the name of the classifier'''

    global result_extratrees,result_gradientboosting
    global result_randomforest,result_svm,result_svm_rbf

    if(type_ == "svm"):
        result = result_svm
    elif(type_ == "svm_rbf"):
        result = result_svm_rbf
    elif(type_ == "randomforest"):
        result = result_randomforest
    elif(type_ == "extratrees"):
        result = result_extratrees
    elif(type_ == "gradientboosting"):
        result = result_gradientboosting

    c,w,n=0,0,0
    #runs each test and returns lists with the correct, wrong, and not found
    correct  = [result[i]['Correct'] for i in result if result[i]['Correct']]
    not_found  = [result[i]['Not found'] for i in result if result[i]['Not found']]
    wrong  = [result[i]['Wrong'] for i in result if result[i]['Wrong']]

    #calculates the total percentage of correct, wrong and not found(correct / total, ..., ...)
    total = len(result)*(result[0]['Correct']+result[0]['Wrong']+ result[0]['Not found'])
    c = str(round(((float(sum(correct))/float(total))*100),2))+"%"
    w = str(round(((float(sum(wrong))/float(total))*100),2))+"%"
    n = str(round(((float(sum(not_found))/float(total))*100),2))+"%"
    result['Final_Result'] = {'Correct':c,
                            'Wrong':w,
                            'Not found':n}
    
    #add to classifier json
    js = json.dumps(result, indent=4, separators=(',', ': '),sort_keys=True)
    with open('results_json/{}.json'.format(type_), 'w+') as f:
       f.write(js)

def separate_test_and_train(path_nao,path_sim,path_test):
    '''Calculates how many files will be used for training and how
     many will be used for testing and returns the lists of files for each one'''
    #length_all = len(list(path_nao.glob('*.wav')))+ len(list(path_sim.glob('*.wav')))
    #train_length = int(((90*length_all)/100)/2)
    #train_sim = sample(list(path_sim.glob('*.wav')),k=train_length)
    #train_nao = sample(list(path_nao.glob('*.wav')),k=train_length)
    train_sim = list(path_sim.glob('*.wav'))
    train_nao = list(path_nao.glob('*.wav'))
    #test_sim = list(set(list(path_sim.glob('*.wav')))- set(train_sim))
    #test_nao = list(set(list(path_nao.glob('*.wav')))- set(train_nao))
    #test = test_sim+test_nao
    test = list(path_test.glob('*.wav'))
    return(train_sim,train_nao,test)

def create_model(train_nao,train_sim, test_list, model_name):
    '''It receives the lists of training and test files and copies 
    them to the pre-created folders that will be used to create the model, 
    after which is created the model for each algorithm with the name of the model 
    being what is passed as a parameter plus the classifier name, Finally, save the template in the Models folder'''
    for i in range(min(len(train_nao),len(train_sim))):
        subprocess.check_output("cp "+str(train_sim[i])+" samples/sim", 
            stderr=subprocess.STDOUT,
            shell=True)
        subprocess.check_output("cp "+str(train_nao[i])+" samples/nao", 
            stderr=subprocess.STDOUT,
            shell=True)
    
    #for i in test_list:
    #    subprocess.check_output("cp "+str(i)+" samples/test", 
    #        stderr=subprocess.STDOUT,
    #        shell=True)
    
    #Scrolls through the list of classifiers and creates a 
    #   template for each by passing the Yes and No folders and the template name
    for i in classifier_list:   
        modelo = "/home/iqnus/Documentos/Iqnus/sopadeletrinhas/src/pyAudioAnalysis/Models/"+model_name+i
        aT.featureAndTrain(["samples/sim","samples/nao"], 1, 1, aT.shortTermWindow, aT.shortTermStep, i, modelo, False)

def test(test_list,model_name,model_type,precision):
    '''It receives the test list to find false positives (comparing the file name with the classifier result),
     also receives the model name and the classifier type (both will be used as parameters 
     for the classifier method), returns the number of hits, errors,not found and false-positive list of a test'''
    correct, wrong, not_found = 0,0,0
    false_positive_list = []

    #runs audio file that will be used in the test
    for i in test_list:
        #make a handle to the file string so that only the file name is left (removing directory)
        if("sim" in str(i)):
            #file_ = str(i).split("sim_samples/")[1]
            file_ = str(i).split("test/")[1]
        elif("nao" in str(i)):
            #file_ = str(i).split("nao_samples/")[1]
            file_ = str(i).split("test/")[1]
        print("\n"+file_)
          
        # try to sort the file, if it can, check if the precision is 
        # greater than the precision parameter, if yes is valid, 
        # if it is not set to "not found", if given exception is also set to "not found"
        try:
            Result,P, classNames = fileClassification(str(i),model_name,model_type)
            for i, c in enumerate(classNames):
                print("{0:s}\t{1:.2f}".format(c, P[i]))
            if(max(P)>precision):
                print("Winner class: " + classNames[int(Result)])
                winner_class = classNames[int(Result)]
            else:
                print("Winner class: None\n")
                winner_class = "None"       
        except TypeError:
            print("Winner class: None\n")
            winner_class = "None"

        # If there is not a winner not found is incremented, if any is verified
        # if it is the correct result (comparing the audio string with the "winner class" variable)
        # if yes, correct is incremented, else, wrong and list of false-positives are incremented
        if(winner_class =="None"):
            not_found+=1
        elif(winner_class in file_):
            correct+=1
        else:
            wrong+=1
            false_positive_list.append(P)
        
    return(correct,wrong,not_found,false_positive_list)


def clean_train_and_test_dir():
    '''cleans the directories you use for training, test, and models'''
    subprocess.check_output("rm samples/sim/*.wav",
            stderr=subprocess.STDOUT,
            shell=True)
    subprocess.check_output("rm samples/nao/*.wav",
            stderr=subprocess.STDOUT,
            shell=True)
    #subprocess.check_output("rm samples/test/*.wav",
    #        stderr=subprocess.STDOUT,
    #        shell=True)
    subprocess.check_output("rm Models/*",
            stderr=subprocess.STDOUT,
            shell=True)


if('__main__'==__name__):
    '''Receives the parameters passed in the command line, loopes on how many tests
     will take place, calls the methods related to training, test and cleaning, 
     executes for all classifiers'''

    correct, wrong = {},{}
    not_found,false_positive_list = {},[]

    #parameters passed in the command line
    num_of_tests = sys.argv[1]
    model_name = sys.argv[2]

    #creates the Path object of the folders containing the audios
    nao_path = Path("samples/nao_samples")
    sim_path = Path("samples/sim_samples")
    test_path = Path("samples/test") #tirar;
    #creates number of tests related to the past as a parameter 
    for i in range(int(num_of_tests)):
        #in a given test the same training and test audits will be used for each classifier
        train_sim, train_nao,test_list = separate_test_and_train(nao_path,sim_path,test_path)
        create_model(train_nao,train_sim,test_list,model_name)
        #classifies in each classifier
        for type_ in classifier_list:
            modelo = "/home/iqnus/Documentos/Iqnus/sopadeletrinhas/src/pyAudioAnalysis/Models/"+model_name+type_
            c,w,n,false_positive_list = test(test_list,modelo,type_,0.85)
            correct['c'] = c
            wrong['w'] = w
            not_found['n']=n
            add_test_to_json(correct['c'],wrong['w'],not_found['n'],false_positive_list,type_)
        clean_train_and_test_dir()
    #Final result for each classifier
    for i in classifier_list:
        final_result(i)