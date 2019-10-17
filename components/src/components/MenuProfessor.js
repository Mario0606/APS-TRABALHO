import React, { Component } from 'react';
import './Menu.css';

export default class MenuProfessor extends Component {
    render() {
        return (
            <div id="accordion">

                {/* TÍTULO */}
                <div id="titulo" className="card">
                    <div className="card-header" id="headingOne">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Cadastro
                        </button>
                    </div>

                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div style = {{padding:'0'}} className="card-body">
                            
                            {/* ITENS */}

                            <div className="card">
                                <div className="card-header" id="headingOne">
                                  
                                    <button id="item" className="btn btn-link">
                                        Editar Cadastro
                                    </button>
                                   
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    
                                    <button id="item" className="btn btn-link">
                                        Remover cadastro
                                    </button>
                                  
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* TÍTULO */}
                <div id="titulo" className="card">
                    <div className="card-header" id="headingTwo">
                       
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Artigos
                        </button>
                   
                    </div>

                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion" >
                        <div style = {{padding:'0'}} className="card-body">
                            
                            {/* ITENS */}

                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                   
                                    <button id="item" className="btn btn-link">
                                        Submeter Artigo
                                    </button>
                                   
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                   
                                    <button id="item" className="btn btn-link">
                                        Visualizar Artigos Submetidos
                                    </button>
                                   
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                   
                                    <button id="item" className="btn btn-link">
                                        Revisar Artigo
                                    </button>
                                  
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                   
                                    <button id="item" className="btn btn-link">
                                        Visualizar Artigos Revisados
                                    </button>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
