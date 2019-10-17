import React, { Component } from 'react'
import axios from 'axios';
import DinamicFormField from './DinamicFormField.js'
import '../pages/CadastroPage.css'

const formGroupStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems:'flex-start'
};

export default class EditarCadastroForm extends Component {
    state = {
            email:null,
            password:null,
            institution:null,
            address:null,
            matricule:null,
            tittle:null,
            search_area:null
    }
    
    handleChangeEmail = (e)=>{
        e.persist();
        this.setState((prevState)=>(
                {
                    ...prevState,
                    email:e.target.value
                }
            )
        );
    }

    handleChangePwd = (e)=>{
        e.persist();
        this.setState((prevState)=>(
                {
                    ...prevState,
                    password:e.target.value
                }
            )
        );
    }

    handleChangeInstitution = (e)=>{
        e.persist();
        this.setState((prevState)=>(
                {
                    ...prevState,
                    institution:e.target.value

                }
            )
        );
    }

    handleChangeEndereco = ()=>{
        let logradouro = document.getElementById('logradouro').value;
        let bairro = document.getElementById('bairro').value;
        let complemento = document.getElementById('complemento').value;
        let cidade = document.getElementById('cidade').value;
        let estado = document.getElementById('estado').value;
        let pais = document.getElementById('pais').value;
    
        this.setState((prevState)=>(
            {
                ...prevState,
                address:`${logradouro}-${bairro}-${complemento}-${cidade}, ${estado}, ${pais}`
            }
            )
        );


    }

    handleChangeMatricule = (e)=>{
        e.persist();
        this.setState((prevState)=>(
                {
                    ...prevState,
                    matricule:e.target.value
                }
            )
        );
    }
    handleChangeTittle = (e)=>{
        e.persist();
        this.setState((prevState)=>(

                {
                    ...prevState,
                    tittle:e.target.value
                }
            )
        );
    }
    handleChangeSearchArea = (e)=>{
        e.persist();
        this.setState((prevState)=>(
                {
                    ...prevState,
                    search_area:e.target.value
                }
            )
        );
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let type = this.props.userData.type === 'prof'? 'professor': 'student';
        let formData = {
            email:this.state.email,
            password:this.state.password,
            institution:this.state.institution,
            address:this.state.address            
        };

        if(type===`professor`){
            formData={
                ...formData,
                tittle:this.state.tittle,
                search_area:this.state.search_area
            }
        }else{
            formData={
                ...formData,
                matricule:this.state.matricule
            }
        }
        axios.patch(`http://localhost:8000/api/${type}/`, formData)
         .then((response)=>{
            this.props.displayAlert('alterar-cadastro', response.data);
        })
        
        // console.log(this.state);
        // this.props.displayAlert('alterar-cadastro', {valid: true, reason:'deu ruim ai'});
    }


    render() {
        return (
            <div style={{margin:'2% 0', width:'30em'}}>
                <h2>Editar Cadastro</h2>
                <form onSubmit={this.handleSubmit} id = "mainForm" >

                    <div className="form-row">
                        <div style={formGroupStyle} className="form-group col-md-6">
                            <label >Email</label>
                            <input onChange={this.handleChangeEmail} type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                        </div>
                        <div style={formGroupStyle} className="form-group col-md-6">
                            <label >Senha</label>
                            <input onChange={this.handleChangePwd} type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                    </div>
                    <div style={formGroupStyle} className="form-group">
                        <label >Instituição</label>
                        <input onChange={this.handleChangeInstitution} type="text" className="form-control" id="inputInstitution" placeholder="Instituição"/>
                    </div>
                    <div className="form-row">
                        <div style={formGroupStyle} className="form-group col-md-5">
                            <label >Logradouro</label>
                            <input id="logradouro" onChange={this.handleChangeEndereco} type="text" className="form-control" placeholder="Rua X, 1234"/>
                        </div>
                        <div style={formGroupStyle} className="form-group col-md-3">
                            <label >Bairro</label>
                            <input id="bairro" onChange={this.handleChangeEndereco} type="text" className="form-control" placeholder="Bairro"/>
                        </div>
                        <div style={formGroupStyle} className="form-group col-md-4">
                            <label >Complemento</label>
                            <input id="complemento" onChange={this.handleChangeEndereco} type="text" className="form-control" placeholder="Complemento"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div style={formGroupStyle} className="form-group col-md-6">
                            <label >Cidade</label>
                            <input id="cidade" onChange={this.handleChangeEndereco} type="text" className="form-control" placeholder="Cidade"/>
                        </div>
                        <div style={formGroupStyle} className="form-group col-md-3">
                            <label >Estado</label>
                            <input id="estado" onChange={this.handleChangeEndereco} type="text" className="form-control" placeholder="Estado"/>
                        </div>
                        <div style={formGroupStyle} className="form-group col-md-3">
                            <label >País</label>
                            <input id="pais" onChange={this.handleChangeEndereco} type="text" className="form-control" placeholder="País"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <DinamicFormField funcao = {this.props.userData.userType} handleChangeMatricule={this.handleChangeMatricule} handleChangeTittle={this.handleChangeTittle} handleChangeSearchArea={this.handleChangeSearchArea}></DinamicFormField>
                    </div>
                    <button type="submit" style={{transition:'500ms'}} className="btn btn-primary">Concluir Alteração</button>
                </form>
            </div>
        )
    }
}
