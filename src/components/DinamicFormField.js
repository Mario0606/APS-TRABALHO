import React, { Component } from 'react'

const formGroupStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems:'flex-start'
};


export default class DinamicFormField extends Component {

    render() {
        
        if(this.props.funcao === 'aluno'){
            return (
                <React.Fragment>
                    <div style={formGroupStyle} className="form-group col-md-auto">
                        <label >Numero de Matrícula</label>
                        <input onChange={this.props.handleChangeMatricule} type="text" className="form-control" id="inputMat" placeholder="Nº Matrícula"/>
                    </div>
                </React.Fragment>
            )
        }
        else if(this.props.funcao === 'professor'){
            return(
                <React.Fragment>
                    <div style={formGroupStyle} className="form-group col-md-auto">
                        <label >Titulação</label>
                        <input onChange={this.props.handleChangeTittle} type="text" className="form-control" id="inputTit" placeholder="Titulação"/>
                    </div>
                    <div style={formGroupStyle} className="form-group col-md-auto">
                        <label >Área de Pesquisa</label>
                        <input onChange={this.props.handleChangeSearchArea}  type="text" className="form-control" id="inputAreaPesq" placeholder="Área de Pesquisa"/>
                    </div>
                </React.Fragment>
            )
        }
        else{
            return (<React.Fragment></React.Fragment>)
        }
    }
}
