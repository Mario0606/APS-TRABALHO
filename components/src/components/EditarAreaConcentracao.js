import React, { Component } from 'react';
import List from './List.js';
import axios from 'axios';

const formGroupStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems:'flex-start',
    margin: '8% 0 9% 0'
};


export default class EditarAreaConcentracao extends Component {

    constructor(props){
        super(props);
        this.handleListClick=this.handleListClick.bind(this);
        this.state={
            areaConcentracao: '',
            component:  <React.Fragment>
                            <p>Selecione a Área de Concentração que deseja alterar:</p>
                            <List selectable={true} listOf="all-ac" handleClick={this.handleListClick} displayAlert={this.props.displayAlert}/>
                        </React.Fragment>
        };
    }

    handleSubmit=(e)=>{
        e.preventDefault();
    }

    handleClick = ()=>{
        axios.post(`http://localhost:8000/api/concentration_area/`, {area: this.state.areaConcentracao})
         .then((response)=>{
                this.props.displayAlert('editar-ac', response.data);
        })

    }

    handleChangeAreaConcentracao=(e)=>{
        this.setState({areaConcentracao: e.target.value})
    }


    handleListClick(areaConcentracaoData){
        this.setState( (prevState) =>
           ( 
                {
                    ...prevState,
                    component:  <React.Fragment>
                                    <List selectable={false} listOf="area-concentracao" element={areaConcentracaoData}/>
                                    <form onSubmit={this.handleSubmit} id = "mainForm" >
                                        <div style={formGroupStyle} className="form-group">
                                            <label >Área de Concentração:</label>
                                            <input onChange={this.handleChangeAreaConcentracao} type="text" className="form-control" id="input-keyword" placeholder="Insira a nova Área de Concentração"/>
                                        </div>
                                        <button type="submit" style={{transition:'500ms'}} className="btn btn-primary" onClick={this.handleClick}>Concluir Alteração</button>
                                    </form>
                                </React.Fragment>
                }
            )
            
        );
    }

    render() {
        return (
            <div style={{margin:'2% 0', width:'30em'}}>
                <h2>Editar Área de Concentração</h2>
                {this.state.component}
            </div>
        )
    }
}
