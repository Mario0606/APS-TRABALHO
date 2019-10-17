import React, { Component } from 'react';
import axios from 'axios';
import List from './List.js';
import './Button.css';

const formGroupStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems:'flex-start',
    margin: '8% 0 9% 0'
};

export default class RemoverAreaConcentracao extends Component {

    constructor(props){
        super(props);
        this.handleListClick=this.handleListClick.bind(this);
        this.state={
            areaConcentracao: '',
            component:  <React.Fragment>
                            <p>Selecione a Área de Concentração que deseja remover:</p>
                            <List selectable={true} listOf="all-ac" handleClick={this.handleListClick} displayAlert={this.props.displayAlert}/>
                        </React.Fragment>
        };
    }

    handleClick = (e) => {
        e.persist();
        this.setState(
            {
                component:  <React.Fragment>
                                <p>Selecione a Área de Concentração que deseja remover:</p>
                                <List selectable={true} listOf="all-ac" handleClick={this.handleListClick} displayAlert={this.props.displayAlert}/>
                            </React.Fragment>
            },

            () => {
                if(e.target.id === "yesBtn"){
                    axios.delete(`http://localhost:8000/api/concentration_area/${this.state.areaConcentracao.concentration_area_id}/`)
                    .then((response)=>this.props.displayAlert("remover-ac", response.data));
                }
            }

        );
    }

    handleListClick(areaConcentracaoData){
        this.setState(
            {
                areaConcentracao: areaConcentracaoData,
                component:  <React.Fragment>
                                <List selectable={false} listOf="area-concentracao" element={areaConcentracaoData}/>
                                <p>Deseja Remover a Área de Concentração?</p>
                                <div style={{display:'flex', flexFlow:'row nowrap', justifyContent:'space-around', width:'9em', margin:'auto'}}>
                                    <button id="yesBtn" onClick={this.handleClick} style={{width:'4em'}} className="green-btn">Sim</button>
                                    <button id="noBtn" onClick={this.handleClick} style={{width:'4em'}} className="red-btn">Não</button>
                                </div>
                            </React.Fragment>
            }

        );
    }

    render(){
        return (
            <div style={{margin:'2% 0', width:'30em'}}>
                <h2>Remover Área de Concentração </h2>
                {this.state.component}
            </div>
        )
    }
}