import React, { Component } from 'react'
import axios from 'axios';
import '../pages/CadastroPage.css'

const formGroupStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems:'flex-start',
    margin: '8% 0 9% 0'
};

export default class CriarKeyword extends Component {
    
    state={
        keyword: null
    }

    handleChangeKeyword=(e)=>{
        this.setState({keyword: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/keyword/`, {keyword:this.state.keyword})
         .then((response)=>{
            this.props.displayAlert('criar-keyword', response.data);
        })

        // this.props.displayAlert('criar-keyword', {valid:true})
    }
    
    render() {
        return (
            <div style={{margin:'2% 0', width:'30em'}}>
                <h2>Criar Nova Palavra-Chave</h2>
                <form onSubmit={this.handleSubmit} id = "mainForm" >
                    <div style={formGroupStyle} className="form-group">
                        <label >Palavra-Chave:</label>
                        <input onChange={this.handleChangeKeyword} type="text" className="form-control" id="input-keyword" placeholder="Insira a nova Palavra-Chave"/>
                    </div>
                    <button type="submit" style={{transition:'500ms'}} className="btn btn-primary">Cadastrar Palavra-Chave</button>
                </form>
            </div>
        )
    }
}
