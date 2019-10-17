import React, { Component } from 'react';
import './Menu.css';

export default class MenuAdm extends Component {
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

                        </div>
                    </div>
                </div>

                {/* TÍTULO */}
                <div id="titulo" className="card">
                    <div className="card-header" id="headingThree">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            Eventos
                        </button>
                    </div>

                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div style = {{padding:'0'}} className="card-body">
                            
                            {/* ITENS */}

                            <div className="card">
                                <div className="card-header" id="headingThree">
                                
                                    <button id="item" className="btn btn-link">
                                        Criar Novo Evento
                                    </button>
                                
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    
                                    <button id="item" className="btn btn-link">
                                        Editar Evento
                                    </button>
                                
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    
                                    <button id="item" className="btn btn-link">
                                        Remover Evento
                                    </button>
                                
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                 {/* TÍTULO */}
                <div id="titulo" className="card">
                    <div className="card-header" id="headingFour">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            Palavras-Chave
                        </button>
                    </div>

                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div style = {{padding:'0'}} className="card-body">
                            
                            {/* ITENS */}

                            <div className="card">
                                <div className="card-header" id="headingFour">
                                
                                    <button id="item" className="btn btn-link">
                                        Criar Nova Palavra-Chave
                                    </button>
                                
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingFour">
                                    
                                    <button id="item" className="btn btn-link">
                                        Editar Palavra-Chave
                                    </button>
                                
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingFour">
                                    
                                    <button id="item" className="btn btn-link">
                                        Remover Palavra-Chave
                                    </button>
                                
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* TÍTULO */}
                <div id="titulo" className="card">
                    <div className="card-header" id="headingFive">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                            Área de Concentração
                        </button>
                    </div>

                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                        <div style = {{padding:'0'}} className="card-body">
                            
                            {/* ITENS */}

                            <div className="card">
                                <div className="card-header" id="headingFive">
                                
                                    <button id="item" className="btn btn-link">
                                        Criar Nova Área de Concentração
                                    </button>
                                
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingFive">
                                    
                                    <button id="item" className="btn btn-link">
                                        Editar Área de Concentração
                                    </button>
                                
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingFive">
                                    
                                    <button id="item" className="btn btn-link">
                                        Remover Área de Concentração
                                    </button>
                                
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* TÍTULO */}
                <div id="titulo" className="card">
                    <div className="card-header" id="headingSix">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                            Revisores
                        </button>
                    </div>

                    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                        <div style = {{padding:'0'}} className="card-body">
                            
                            {/* ITENS */}

                            <div className="card">
                                <div className="card-header" id="headingSix">
                                
                                    <button id="item" className="btn btn-link">
                                        Indicar Revisor para um Artigo
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
