import React, { Component } from 'react';
import SearchBar from './SearchBar.js';

export default class PesquisarEvento extends Component {
    constructor(props){
        super(props);
        this.state={
            component:<SearchBar search={this.search}/>
        }
    }

    search(searchData) {
        console.log(searchData);
    }

    render() {
        return (
            <div style={{margin:'2% 0', width:'30em'}}>
                <h2>Pesquisar Evento</h2>
                {this.state.component}
            </div>
        )
    }
}
