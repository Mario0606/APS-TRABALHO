import React, { Component } from 'react'

const formGroupStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems:'flex-start'
};

export default class SubmeterArtigo extends Component {
    state={
        nAutores:1,
        formData:{
            titulo:'',
            autores:[{nome:'', email:''}],
            descricao:'',
            file:null
        }
    }
    handleChangeNumeroAutores=(e)=>{
        e.persist();
        this.setState(
            (prevState)=>{
                let aux=[];
                for(let i = 0; i < e.target.value; ++i){
                aux.push({nome:'', email:''}); 
                }
                return (
                    {
                        nAutores:e.target.value>=1?e.target.value:1, 
                        formData:{...prevState.formData, autores:aux.slice()}
                    }
                );
            },
            this.clearAutoresData
        );
    }
    handleChangeAutor=(e)=>{
        e.persist();
        this.setState(
            (prevState)=>{
                let autorId = e.target.parentElement.parentElement.id;
                let aux = this.state.formData.autores.slice();
                aux[autorId].nome = e.target.value;
                return (
                    {
                        ...prevState, 
                        formData:{...prevState.formData, autores:aux.slice()}
                    }
                );
            } ,

            ()=>console.log(this.state.formData.autores)
        );
    }

    handleChangeEmail=(e)=>{
        e.persist();
        this.setState(
            (prevState)=>{
                let autorId = e.target.parentElement.parentElement.id;
                let aux = this.state.formData.autores.slice();
                aux[autorId].email = e.target.value;
                return (
                    {
                        ...prevState, 
                        formData:{...prevState.formData, autores:aux.slice()}
                    }
                );
            } ,

            ()=>console.log(this.state.formData.autores)
        );
    }

    handleChangeDescricao=(e)=>{
        e.persist();
        this.setState(
            (prevState)=>{
                return (
                    {
                        ...prevState, 
                        formData:{...prevState.formData, descricao:e.target.value}
                    }
                );
            } ,

            ()=>console.log(this.state.formData.descricao)
        );
    }

    handleChangeFile=(e)=>{
        e.persist();
        this.setState(
            (prevState)=>{
                return (
                    {
                        ...prevState, 
                        formData:{...prevState.formData, file:e.target.value}
                    }
                );
            } ,

            ()=>console.log(this.state.formData.file)
        );
    }



    clearAutoresData = ()=>{
        let autor, email;
        for(let i = 0; i < this.state.nAutores; ++i){
            autor = document.getElementById(`input-autor-${i}`);
            autor.value = '';
        }
        for(let i = 0; i < this.state.nAutores; ++i){
            email = document.getElementById(`input-email-${i}`);
            email.value = '';
        }
    }

    getAutoresField=()=>{
        let output = [];
        for(let i = 0 ; i < this.state.nAutores; ++i){
            output.push(<div id={`${i}`} className="form-row">
                            <div style={formGroupStyle} className="form-group col-md-6">
                                <label >Autor:</label>
                                <input onChange={this.handleChangeAutor} type="text" className="form-control" id={`input-autor-${i}`} placeholder="Nome do Autor"/>
                            </div>
                            <div style={formGroupStyle} className="form-group col-md-6">
                                <label >Email:</label>
                                <input onChange={this.handleChangeEmail} type="email" className="form-control" id={`input-email-${i}`} placeholder="Email do Autor"/>
                            </div>
                        </div>
            );
        }

        return output;
    }

    render() {
        return (
            <div style={{margin:'2% 0', width:'30em'}}>
                <h2>Submeter Artigo</h2>
                <form onSubmit={this.handleSubmit} id = "mainForm" >
                    <div style={formGroupStyle} className="form-group">
                        <label >Título:</label>
                        <input onChange={this.handleChangeTitulo} type="text" className="form-control" id="input-titulo" placeholder="Titulo do Artigo"/>
                    </div>

                    <div style={{marginBottom:'1em', display:'flex', flexFlow:'row nowrap', alignItems:'center'}}>
                        <label style={{marginRight: '1em'}}>Número de autores:</label>
                        <input style={{width:'20%'}} onChange={this.handleChangeNumeroAutores} type="text" className="form-control" id="num-autores" placeholder="1"/>
                    </div>
                    <div id="autores">
                        {this.getAutoresField()}
                    </div>
                    <div style={formGroupStyle} className="form-group">
                        <label >Descrição:</label>
                        <textarea onChange={this.handleChangeDescricao} className="form-control" id="descricao" rows="2"></textarea>
                    </div>
                    <div style={formGroupStyle} className="form-group">
                        <label >Arquivo do Artigo:</label>
                        <input onChange={this.handleChangeFile} type="file" className="form-control-file" id="artigo-file"></input>
                    </div>
                    
                </form>
            </div>
        )
    }
}
