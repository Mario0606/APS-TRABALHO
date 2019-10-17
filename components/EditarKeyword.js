import React, { Component } from 'react';
import List from './List.js';
import axios from 'axios';

const formGroupStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems:'flex-start',
    margin: '8% 0 9% 0'
};

export default class EditarKeyword extends Component {

    constructor(props){
        super(props);
        this.handleListClick=this.handleListClick.bind(this);
        this.state={
            keyword:'',
            component:  <React.Fragment>
                            <p>Selecione a palavra-chave que deseja alterar:</p>
                            <List selectable={true} listOf="all-keywords" handleClick={this.handleListClick} displayAlert={this.props.displayAlert}/>
                        </React.Fragment>
        };
    }

    handleSubmit=(e)=>{
        e.preventDefault();
    }

    handleClick = ()=>{
        axios.post(`http://localhost:8000/api/keyword/`, {keyword:this.state.keyword})
         .then((response)=>{
            this.props.displayAlert('alterar-keyword', response.data);
        })
    }

    handleChangeKeyword= (e)=>{
        e.persist();
        this.setState( (prevState) => ({... prevState, keyword:e.target.value }) );
    }

    handleListClick(keywordData){
        this.setState( (prevState) =>
           ( 
                {
                    ...prevState,
                    component:  <React.Fragment>
                                    <List selectable={false} listOf="keyword" element={keywordData}/>
                                    <form onSubmit={this.handleSubmit} id = "mainForm" >
                                        <div style={formGroupStyle} className="form-group">
                                            <label >Palavra-Chave:</label>
                                            <input onChange={this.handleChangeKeyword} type="text" className="form-control" id="input-keyword" placeholder="Insira a nova Palavra-Chave"/>
                                        </div>
                                        <button type="submit" style={{transition:'500ms'}} className="btn btn-primary" onClick={this.handleClick}>Concluir Alteração</button>
                                    </form>
                                </React.Fragment>
                }
            )
            
        );
    }

    render(){
        return (
            <div style={{margin:'2% 0', width:'30em'}}>
                <h2>Editar Palavra-Chave</h2>
                {this.state.component}
            </div>
        )
    }
}
