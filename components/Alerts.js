import React, { Component } from 'react'

const alertStyle = {
    display: 'none',
};


export default class Alerts extends Component {
    hideAlert(event){
        const alert = event.target.parentNode; 
        alert.style.display = 'none';
    }

    render() {
        return (
            <React.Fragment>
                <div id="alert-login-failure" style={alertStyle} className="alert alert-danger fade show" role="alert">
                    <strong>Não deu!</strong> Usuário ou Senha Incorretos ou Usuário não Cadastrado.
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="alert-cadastro-good" style={alertStyle} className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Sucesso!</strong> O Cadastro foi Realizado!
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="alert-cadastro-failure" style={alertStyle} className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Não deu!</strong><p id="erroCadastro" style={{display:'inline'}}></p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="alert-incorrect-pwd" style={alertStyle} className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Não deu!</strong><p style={{display:'inline'}}> Senha Incorreta</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="remover-cadastro-success" style={alertStyle} className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Sucesso!</strong><p style={{display:'inline'}}> Seu Cadastro foi Removido!</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="alterar-cadastro-success" style={alertStyle} className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Sucesso!</strong><p style={{display:'inline'}}> Seu Cadastro foi Alterado!</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="alterar-cadastro-failure" style={alertStyle} className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Não deu!</strong><p id="erroEditarCadastro" style={{display:'inline'}}></p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>


                <div id="criar-keyword-success" style={alertStyle} className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Sucesso!</strong><p style={{display:'inline'}}> A Palavra-Chave foi Criada!</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="criar-keyword-failure" style={alertStyle} className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Não deu!</strong><p style={{display:'inline'}}> Não foi possível criar a Palavra-Chave.</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>
                <div id="alterar-keyword-success" style={alertStyle} className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Sucesso!</strong><p style={{display:'inline'}}> A Palavra-Chave foi Alterada!</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="alterar-keyword-failure" style={alertStyle} className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Não deu!</strong><p style={{display:'inline'}}> Não foi possível alterar a Palavra-Chave.</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="remover-keyword-success" style={alertStyle} className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Sucesso!</strong><p style={{display:'inline'}}> A Palavra-Chave foi Removida!</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="remover-keyword-failure" style={alertStyle} className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Não deu!</strong><p style={{display:'inline'}}> Não foi possível remover a Palavra-Chave.</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="criar-ac-success" style={alertStyle} className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Sucesso!</strong><p style={{display:'inline'}}> A Área de Concentração foi Criada!</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="criar-ac-failure" style={alertStyle} className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Não deu!</strong><p style={{display:'inline'}}> Não foi possível criar a Área de Concentração.</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="alterar-ac-success" style={alertStyle} className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Sucesso!</strong><p style={{display:'inline'}}> A Área de Concentração foi alterada!</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="alterar-ac-failure" style={alertStyle} className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Não deu!</strong><p style={{display:'inline'}}> Não foi possível alterar a Área de Concentração.</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="remover-ac-success" style={alertStyle} className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Sucesso!</strong><p style={{display:'inline'}}> A Área de Concentração foi removida!</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>

                <div id="remover-ac-failure" style={alertStyle} className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Não deu!</strong><p style={{display:'inline'}}> Não foi possível remover a Área de Concentração.</p>
                    <button onClick={this.hideAlert} type="button" className="close" aria-label="Close">
                        &times;
                    </button>
                </div>
            </React.Fragment>
        )
    }
}
