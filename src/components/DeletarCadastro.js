import React, { Component } from 'react'
import axios from 'axios';

import './DeletarCadastro.css'
import './Button.css'

export default class DeletarCadastro extends Component {
    state={
        pwd:null
    }
    
    handlePasswordChange(e){
        this.setState({pwd:e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
    }

    handleClick=()=>{
        // axios.post(`http://localhost:8000/login/auth/`, {email:this.props.userData.email, password: this.state.pwd})
        //  .then((res)=>{
        //      if(res.data.auth){

        //         //AXIOS PARA REMOVER CADASTRO AQUI

        //         this.props.userLoggedChange(null, true); //logout
             
        //     }
        //      else{
        //          this.props.displayAlert('incorrect-pwd');
        //      }
        //  })

        this.props.userLoggedChange(null, true); //logout
        this.props.displayAlert('remover-cadastro-success');
    }

    render() {
        return (

            <div style={{display:'flex', flexFlow:'column nowrap', margin:'5%'}}>
                <h2 style={{marginBottom:'8%'}}>Remover Cadastro</h2>
                <form  id="pwd-deletar-cadastro" onSubmit={this.handleSubmit}>
                    <p>Para remover seu cadastro é necessário inserir sua senha.</p>
                    <strong>Atenção!</strong><p> Esta operação não pode ser desfeita.</p>
                    <label className="sr-only">Password:</label>
                    <input style={{marginTop: '9%'}} onChange={this.handlePasswordChange} type="password" className="form-control" id="pwd" placeholder="senha"/>
                    <button type="submit" style={{margin:'9%'}} className="btn btn-primary red-btn" onClick={this.handleClick}>Remover Cadastro</button>
                </form>
            </div>

        )   
    }
}
