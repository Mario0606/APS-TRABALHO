import React, { Component } from 'react';
import ListBody from './ListBody.js';
import './List.css';

export default class List extends Component {

    state={
        header:null,
        body:null
    };

    componentDidMount(){
        let dinamicHeader;
        switch(this.props.listOf){
            case "all-keywords":
            case "keyword":
                dinamicHeader = <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Palavra-Chave</th>
                                    </tr>
                                </thead>;
                break;
            case "all-ac":
            case "area-concentracao":
                dinamicHeader = <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Área de Concentração</th>
                                    </tr>
                                </thead>;
                break;
            case "all-events":
            case "evento":
                dinamicHeader = <thead>
                                    <tr>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Data de Início</th>
                                        <th scope="col">Data de Fim</th>
                                        <th scope="col">Início da Submissão</th>
                                        <th scope="col">Fim da Submissão</th>
                                        <th scope="col">Área de Concentração</th>
                                        <th scope="col">Palavras-Chave</th>
                                        <th scope="col">Revisores</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>;
                break;
            default:
                ;

        }
        this.setState(
            {
                header: dinamicHeader,
                body:   <tbody>
                            <ListBody selectable={this.props.selectable} element={this.props.element} handleClick={this.props.handleClick} listOf={this.props.listOf}/>
                        </tbody>
            }
        );
    }

    render() {
        return (
            <div style={{maxHeight:'20em', width:'30em', margin: '5% auto'}} className=" table-responsive">
                <table className="table table-bordered table-hover">
                    {this.state.header}
                    {this.state.body}
                </table>
            </div>
        )
    }
}
