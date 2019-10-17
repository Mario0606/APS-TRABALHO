import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import { Router, Redirect, Switch, Route} from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar.js';
import Alerts from './components/Alerts.js';

import MainPage from './pages/MainPage.js'
import NotFoundPage from './pages/NotFoundPage.js'
import CadastroPage from './pages/CadastroPage.js'

import ProtectedRoute from './components/ProtectedRoute';
import UserPage from './pages/UserPage.js';


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
                userId:null,
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

    userLoggedChange = (formData, logout) => {
        
        axios.post(`http://localhost:8000/user/login/`, formData)
         .then((res)=>{
            this.setState( { userId:res.data.auth? res.data.id:null, userLogged:res.data.auth, email:res.data.auth?formData.email:null, userType:res.data.auth?res.data.type:null} , ()=>{
                sessionStorage.setItem('loginState', JSON.stringify(this.state));
                history.push(this.state.userLogged? '/user=':'/');
                if(!this.state.userLogged && !logout){
                    this.displayAlert('login-failure');
                }
            });
         })
        // let log = !this.state.userLogged;
        
        //  this.setState( { userLogged:log, email:log?formData.email:null, userType:log?'adm':null} , ()=>{
        //     sessionStorage.setItem('loginState', JSON.stringify(this.state));

        //     history.push(this.state.userLogged? `/user=`:'/');
        //     if(!logout && !this.state.userLogged){
        //         this.displayAlert('login-failure');
        //     }
            
        // });
         
    }


    displayAlert = (alertType, res) => {
        let alert;
        switch (alertType){
            case 'login-failure':
                alert = document.getElementById('alert-login-failure');
                break;
            case 'cadastro':
                if(res.valid){
                    alert = document.getElementById('alert-cadastro-good');

                }
                else{
                    alert = document.getElementById('alert-cadastro-failure');
                    document.getElementById('erroCadastro').innerHTML = ` ${res.reason}.`;
                }
                break;
            case 'incorrect-pwd':
                alert = document.getElementById('alert-incorrect-pwd');
                break;
            case 'remover-cadastro-success':
                alert = document.getElementById('remover-cadastro-success');
                break; 
            case 'alterar-cadastro':
                if(res.valid){
                    alert = document.getElementById('alterar-cadastro-success');

                }
                else{
                    alert = document.getElementById('alterar-cadastro-failure');
                    document.getElementById('erroEditarCadastro').innerHTML = ` ${res.reason}.`;
                }
                break;
            case 'criar-keyword':
                if(res.valid){
                    alert = document.getElementById('criar-keyword-success');

                }
                else{
                    alert = document.getElementById('criar-keyword-failure');
                }
                break;
            case 'alterar-keyword':
                if(res.valid){
                    alert = document.getElementById('alterar-keyword-success');

                }
                else{
                    alert = document.getElementById('alterar-keyword-failure');
                }
                break;
            case 'remover-keyword':
                if(res.valid){
                    alert = document.getElementById('remover-keyword-success');

                }
                else{
                    alert = document.getElementById('remover-keyword-failure');
                }
                break;
            case 'criar-ac':
                if(res.valid){
                    alert = document.getElementById('criar-ac-success');

                }
                else{
                    alert = document.getElementById('criar-ac-failure');
                }
                break;
            case 'alterar-ac':
                if(res.valid){
                    alert = document.getElementById('alterar-ac-success');

                }
                else{
                    alert = document.getElementById('alterar-ac-failure');
                }
                break;
            case 'remover-ac':
                if(res.valid){
                    alert = document.getElementById('remover-ac-success');

                }
                else{
                    alert = document.getElementById('remover-ac-failure');
                }
                break;
            default:
                return;    
        }

        alert.style.display='block';
    }

    render() {
        return (
            <div className="App" style = {appHomeStyle}>
                <div style={{width:'50em'}}>
                <Router history={history}>
                    
                    <header className="App-header">
                    <NavBar userData = {this.state} userLoggedChange={this.userLoggedChange}/>
                    </header>

                    
                    <Alerts />

                    <Switch>
                    <Route exact path="/" render={ ()=>(<MainPage userData={this.state} history={history}/>)} />
                    <Route exact path="/cadastro" render={()=>(<CadastroPage displayAlert = {this.displayAlert} />)} />
                    <Route exact path="/404" component={NotFoundPage} />
                    <Route path={`/user=`} render={ ()=> (<ProtectedRoute component = {<UserPage userLoggedChange={this.userLoggedChange} displayAlert={this.displayAlert} userData={this.state}/>} userData={this.state} />) } />
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
