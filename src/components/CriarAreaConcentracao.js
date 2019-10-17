import React, { Component } from 'react'
import axios from 'axios';
import '../pages/CadastroPage.css'

const formGroupStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems:'flex-start',
    margin: '8% 0 9% 0'
};

export default class CriarAreaConcentracao extends Component {
    state={
        areaConcentracao: null
    }

    handleChangeAreaConcentracao=(e)=>{
        this.setState({areaConcentracao: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/concentration_area/`, {area: this.state.areaConcentracao})
         .then((response)=>{
                this.props.displayAlert('criar-ac', response.data);
        })

        // this.props.displayAlert('criar-ac', {valid:false});
    }

    render() {
        return (
            <div style={{margin:'2% 0', width:'30em'}}>
                <h2>Criar Nova Área de Concentração</h2>
                <form onSubmit={this.handleSubmit} id = "mainForm" >
                    <div style={formGroupStyle} className="form-group">
                        <label >Área de Concentração:</label>
                        <input onChange={this.handleChangeAreaConcentracao} type="text" className="form-control" id="input-area-concentracao" placeholder="Insira a nova Área de Concentração"/>
                    </div>
                    <button type="submit" style={{transition:'500ms'}} className="btn btn-primary">Cadastrar Palavra-Chave</button>
                </form>
            </div>
        )
    }
}
