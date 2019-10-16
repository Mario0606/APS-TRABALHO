import React, { Component } from 'react';

const formGroupStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems:'flex-start'
};

export default class EditarEvento extends Component {
    state={
        name:'',
        sigla:'',
        data_realizacao:'',
        inicio:'',
        deadline:'',
        area_concentracao:'',
        keywords:'',
        revisores:''
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }

    handleChangeName=(e)=>{
        e.persist();
        this.setState((prevState)=>({...prevState, name:e.target.value}));
    }
    handleChangeSigla=(e)=>{
        e.persist();
        this.setState((prevState)=>({...prevState, sigla:e.target.value}));
    }
    handleChangeDataRealizacao=(e)=>{
        e.persist();
        this.setState((prevState)=>({...prevState, data_realizacao:e.target.value}));
    }
    handleChangeInicio=(e)=>{
        e.persist();
        this.setState((prevState)=>({...prevState, inicio:e.target.value}));
    }
    handleChangeDeadline=(e)=>{
        e.persist();
        this.setState((prevState)=>({...prevState, deadline:e.target.value}));
    }
    handleChangeAreaConcentracao=(e)=>{
        e.persist();
        this.setState((prevState)=>({...prevState, area_concentracao:e.target.value}));
    }
    handleChangeKeywords=(e)=>{
        let selectedOptions = [];
        for(let i = 0; i < e.target.options.length; ++i){
            if(e.target.options[i].selected){
                selectedOptions.push(e.target.options[i].value);
            }
        }

        console.log(selectedOptions)
        this.setState((prevState)=>({...prevState, keywords:selectedOptions}));
    }
    handleChangeRevisores=(e)=>{
        let selectedOptions = [];
        for(let i = 0; i < e.target.options.length; ++i){
            if(e.target.options[i].selected){
                selectedOptions.push(e.target.options[i].value);
            }
        }

        console.log(selectedOptions)
        this.setState((prevState)=>({...prevState, keywords:selectedOptions}));
    }

    getSelectedOptions(optionType) {
        let opts = [], opt, options=[];
        switch(optionType){
            case "keyword":
                options = this.getKeywords();
                break;
            case "revisor":
                options = this.getRevisores();
                break;
            default:
                ;
        }
        for (let i=0; i<options.length; i++) {
            opt = options[i];
            if ( opt.selected ) {
                opts.push(opt);
            }
        }

        return opts;
    }

    getAreaConcentracao=()=>{
        return(
            [
                <option>1</option>,
                <option>2</option>,
                <option>3</option>,
                <option>4</option>,
                <option>5</option>
            ]
        );
    }

    getKeywords=()=>{
        return(
            [
                <option>1</option>,
                <option>2</option>,
                <option>3</option>,
                <option>4</option>,
                <option>5</option>
            ]
        );
    }

    getRevisores=()=>{
        return(
            [
                <option>1</option>,
                <option>2</option>,
                <option>3</option>,
                <option>4</option>,
                <option>5</option>
            ]
        );
    }

    render() {
        return (
            <div style={{margin:'2% 0', width:'30em'}}>
                <h2>Editar Evento</h2>
                <form onSubmit={this.handleSubmit} id = "mainForm" >
                    <div style={formGroupStyle} className="form-group">
                        <label >Nome:</label>
                        <input onChange={this.handleChangeName} type="text" className="form-control" id="input-nome" placeholder="Nome do Evento"/>
                    </div>
                    <div className="form-row">
                        <div style={formGroupStyle} className="form-group col-md-4">
                            <label >Sigla</label>
                            <input id="sigla" onChange={this.handleChangeSigla} type="text" className="form-control" placeholder="Sigla"/>
                        </div>
                        <div style={formGroupStyle} className="form-group col-md-8">
                            <label >Data de Realização</label>
                            <input id="data-realização" onChange={this.handleChangeDataRealizacao} type="date" className="form-control" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div style={formGroupStyle} className="form-group col-md-6">
                            <label> Início de Submissão</label>
                            <input id="inicio-submissao" onChange={this.handleChangeInicio} type="date" className="form-control"/>
                        </div>
                        <div style={formGroupStyle} className="form-group col-md-6">
                            <label >Fim de Submissão</label>
                            <input id="fim-submissao" onChange={this.handleChangeDeadline} type="date" className="form-control"/>
                        </div>
                    </div>
                    <div style={formGroupStyle} className="form-group">
                        <label>Área de Concentração</label>
                        <select onChange={this.handleChangeAreaConcentracao} className="form-control" id="area-concentracao">
                            {this.getAreaConcentracao()}
                        </select>
                    </div>
                    
                    <div className="form-row">
                        <div style={formGroupStyle} className="form-group col-md-6">
                            <label>Palavras-Chave (Ctrl + Clique)</label>
                            <select onChange={this.handleChangeKeywords} multiple className="form-control" id="keyword">
                                {this.getKeywords()}
                            </select>
                        </div>
                        <div style={formGroupStyle} className="form-group col-md-6">
                            <label>Revisores (Ctrl + Clique)</label>
                            <select multiple  onChange={this.handleChangeRevisores} className="form-control" id="revisores">
                                {this.getRevisores()}
                            </select>
                        </div>
                    </div>

                    <button type="submit" style={{transition:'500ms'}} className="btn btn-primary">Editar Evento</button>
                </form>
            </div>
        )
    }
}
