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

export default class RemoverKeyword extends Component {

    constructor(props){
        super(props);
        this.handleListClick=this.handleListClick.bind(this);
        this.state={
            keyword: '',
            component:  <React.Fragment>
                            <p>Selecione a palavra-chave que deseja remover:</p>
                            <List selectable={true} listOf="all-keywords" handleClick={this.handleListClick} displayAlert={this.props.displayAlert}/>
                        </React.Fragment>
        };
    }

    handleClick = (e) => {
        e.persist();
        this.setState(
            {
                component:  <React.Fragment>
                                <p>Selecione a palavra-chave que deseja remover:</p>
                                <List selectable={true} listOf="all-keywords" handleClick={this.handleListClick} displayAlert={this.props.displayAlert}/>
                            </React.Fragment>
            },

            () => {
                if(e.target.id === "yesBtn"){
                    axios.delete(`http://localhost:8000/api/keyword/${this.state.keyword.keyword_id}/`)
                     .then((response)=>this.props.displayAlert("remover-keyword", response.data));
                }
            }
            
        );
    }

    handleListClick(keywordData){
        this.setState(
            {
                keyword:keywordData,
                component:  <React.Fragment>
                                <List selectable={false} listOf="keyword" element={keywordData}/>
                                <p>Deseja Remover a Palavra-Chave?</p>
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
                <h2>Remover Palavra-Chave</h2>
                {this.state.component}
            </div>
        )
    }
}