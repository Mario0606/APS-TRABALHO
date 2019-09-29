import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import { Router, Redirect, Switch, Route} from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar.js';

import MainPage from './pages/MainPage.js'
import NotFoundPage from './pages/NotFoundPage.js'
import CadastroPage from './pages/CadastroPage.js'

import ProtectedRoute from './components/ProtectedRoute';
import UserPage from './pages/UserPage.js';


const alertStyle = {
    display: 'none'
};

const appHomeStyle = {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems:'center',
};

const footerStyle = {
  marginBottom:'auto',
  color:'#738097',
  marginTop: '2%',
  fontSize:'1em',
};

const history = createBrowserHistory();
export default class App extends Component {

    state = {
        userLogged: null,
        email: null,
        userType: null
    }

    constructor(){
        super();
        let loginState = sessionStorage.getItem('loginState');
        if(loginState === null){
            loginState = {
                userLogged: false,
                email: null,
                userType: null
            }
        }
        else{
            loginState = JSON.parse(loginState);
        }
        this.state= loginState;
    }

    userLoggedChange = (formData) => {
        
        axios.post(`http://localhost:8000/login/auth/`, formData)
         .then((res)=>{
             console.log(res)
            this.setState( { userLogged:res.data.auth, email:res.data.auth?formData.email:null, userType:res.data.auth?res.data.type:null} , ()=>{
                sessionStorage.setItem('loginState', JSON.stringify(this.state));
                history.push(this.state.userLogged? '/user=':'/');
                if(!this.state.userLogged){
                    let alert=document.getElementById('alert-failure');
                    alert.style.display='block';
                }
            });
         })
        // let log = !this.state.userLogged;
        
        //  this.setState( { userLogged:log, email:log?formData.email:null, userType:log?'adm':null} , ()=>{
        //     sessionStorage.setItem('loginState', JSON.stringify(this.state));
        //     console.log(this.state.userType);
        //     history.push(this.state.userLogged? `/user=`:'/');
            
        // });
         
    }


    render() {
        return (
            <div className="App" style = {appHomeStyle}>
                <div style={{width:'50em'}}>
                <Router history={history}>
                    
                    <header className="App-header">
                    <NavBar userData = {this.state} userLoggedChange={this.userLoggedChange}/>
                    </header>

                    <div id="alert-failure" style={alertStyle} className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Não deu!</strong> Usuário ou Senha Incorretos ou Usuário não Cadastrado.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <Switch>
                    <Route exact path="/" render={ ()=>(<MainPage userData={this.state} history={history}/>)} />
                    <Route exact path="/cadastro" render={()=>(<CadastroPage />)} />
                    <Route exact path="/404" component={NotFoundPage} />
                    <Route path={`/user=`} render={ ()=> (<ProtectedRoute component = {<UserPage userData={this.state}/>} userData={this.state}/>) } />
                    <Redirect to="/404" />
                    </Switch>
                </Router>
                <footer style={footerStyle}>
                    Criado por Mário Evandro e Antonio Matheus. Imagens/Ícones/Logos por <a href="https://br.freepik.com/">Freepik</a>
                </footer>
                </div>
            </div>
        )
    }

    // componentWillMount(){
    //     let loginState = sessionStorage.getItem('loginState');
    //     if(loginState === null){
    //         loginState = {
    //             userLogged: false
    //         }
    //     }
    //     else{
    //         loginState = JSON.parse(loginState);
    //     }
    //     this.setState( loginState );
    // }
}
