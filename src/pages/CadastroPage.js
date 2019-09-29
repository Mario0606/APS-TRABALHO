import React, { Component } from 'react'
import DinamicFormField from '../components/DinamicFormField.js'
import axios from 'axios';
import './CadastroPage.css'

const alertStyle = {
    display: 'none'
};


const formGroupStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems:'flex-start'
};

const formCheckStyle = {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems:'center',
    justifyContent:'flex-start',
};

export default class CadastroPage extends Component {

    state = {
        form: {
                name: null,
                email:null,
                password:null,
                institution:null,
                address:null,
                type: null,
                matricule:null,
                tittle:null,
                search_area:null
        },

        res: {
            valid:null,
            reason: 'deu ruim'
        }

    }

    handleChangeName = (e)=>{
        e.persist();
        this.setState((prevState)=>(
                    {
                    form:{
                        ...prevState.form,
                        name:e.target.value
                    },
                    res:{
                        ...prevState.res
                    }
                }
            )
        );
    }

    handleChangeEmail = (e)=>{
        e.persist();
        this.setState((prevState)=>(
                    {
                    form:{
                        ...prevState.form,
                        email:e.target.value
                    },
                    res:{
                        ...prevState.res
                    }
                }
            )
        );
    }

    handleChangePwd = (e)=>{
        e.persist();
        this.setState((prevState)=>(
                    {
                    form:{
                        ...prevState.form,
                        password:e.target.value
                    },
                    res:{
                        ...prevState.res
                    }
                }
            )
        );
    }

    handleChangeInstitution = (e)=>{
        e.persist();
        this.setState((prevState)=>(
                    {
                    form:{
                        ...prevState.form,
                        institution:e.target.value
                    },
                    res:{
                        ...prevState.res
                    }
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
                    form:{
                        ...prevState.form,
                        address:`${logradouro}-${bairro}-${complemento}-${cidade}, ${estado}, ${pais}`
                    },
                    res:{
                        ...prevState.res
                    }
                }
            )
        );


    }

    handleChangeType = (e)=>{
        e.persist();
        this.setState((prevState)=>(
                {
                form:{
                    ...prevState.form,
                    type:e.target.value
                },
                res:{
                    ...prevState.res
                }
            }
        )
    );
        
    }

    handleChangeMatricule = (e)=>{
        e.persist();
        this.setState((prevState)=>(
                    {
                    form:{
                        ...prevState.form,
                        matricule:e.target.value
                    },
                    res:{
                        ...prevState.res
                    }
                }
            )
        );
    }
    handleChangeTittle = (e)=>{
        e.persist();
        this.setState((prevState)=>(
                    {
                    form:{
                        ...prevState.form,
                        tittle:e.target.value
                    },
                    res:{
                        ...prevState.res
                    }
                }
            )
        );
    }
    handleChangeSearchArea = (e)=>{
        e.persist();
        this.setState((prevState)=>(
                    {
                    form:{
                        ...prevState.form,
                        search_area:e.target.value
                    },
                    res:{
                        ...prevState.res
                    }
                }
            )
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/create/`, this.state.form)
         .then((response)=>{
                const httpRes = response;
                this.setState((prevState)=>(
                        {
                            form:{
                                ...prevState.form,
                            },
                            res:{
                                ...prevState.res,
                                valid:httpRes.data.valid,
                                reason:httpRes.data.reason
                            }
                        }
                    ),
                    () =>{
                        let alert=document.getElementById(this.state.res.valid?'alert-good':'alert-failure');
                        alert.style.display='block';
                    }
                );
        })
        
    }

    render() {
        return (
             <React.Fragment>



                <div id="alert-good" style={alertStyle} className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Sucesso!</strong> O Cadastro foi Realizado!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div id="alert-failure" style={alertStyle} className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Não deu!</strong> {this.state.res.reason}.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>





                <form onSubmit={this.handleSubmit} id = "mainForm" style={{margin:'1%'}}>
                    <div style={formGroupStyle} className="form-group">
                        <label >Nome</label>
                        <input onChange={this.handleChangeName} type="text" className="form-control" id="inputName" placeholder="Nome"/>
                    </div>
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
                        <div style={formCheckStyle} className="form-group">
                            <label style={{dislay:'inline-block', margin:'0 0 0 0.5rem'}}>Selecione sua função: </label>
                            <div style={{margin:'0 0.5rem'}} className="form-check">
                                <input className="form-check-input" type="radio" name="funcao"  value="aluno" onClick={this.handleChangeType}/>
                                <label className="form-check-label">
                                    Aluno
                                </label>
                            </div>
                            <div style={{margin:'0 0.5rem 0 0'}} className="form-check">
                                <input className="form-check-input" type="radio" name="funcao"  value="professor" onClick={this.handleChangeType}/>
                                <label className="form-check-label">
                                    Professor
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <DinamicFormField funcao = {this.state.form.type} handleChangeMatricule={this.handleChangeMatricule} handleChangeTittle={this.handleChangeTittle} handleChangeSearchArea={this.handleChangeSearchArea}></DinamicFormField>
                    </div>
                    <button type="submit" className="btn btn-primary">Concluir Cadastro</button>
                </form>
            </React.Fragment>
        )
    }
}
