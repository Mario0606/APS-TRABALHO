import React, { Component } from 'react';
import axios from 'axios';

const formGroupStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems:'flex-start'
};

export default class EditarEvento extends Component {
    state={
        form:{
            name:'',
            sigla:'',
            start_date:'',
            end_date:'',
            start_submit:'',
            deadline:'',
            concentration_area:'',
            keywords:'',
            reviewers:''
        },
        acOpt:'',
        revOpt:'',
        keywordOpt:'',
        component: <React.Fragment>
                        <p>Selecione o Evento que deseja alterar:</p>
                        <List selectable={true} listOf="all-events" handleClick={this.handleListClick} displayAlert={this.props.displayAlert}/>
                    </React.Fragment>
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.form)
        axios.post(`http://localhost:8000/api/create_event/`, this.state.form);
    }

    handleChangeName=(e)=>{
        e.persist();
        this.setState((prevState)=>({...prevState, form:{...prevState.form, name:e.target.value}}));
    }
    handleChangeSigla=(e)=>{
        e.persist();
        this.setState((prevState)=>({...prevState, form:{...prevState.form, sigla:e.target.value}}));
    }
    handleChangeDataRealizacao=(e)=>{
        e.persist();
        this.setState((prevState)=>({...prevState, form:{...prevState.form, start_date:e.target.value}}));
    }
    handleChangeFim=(e)=>{
        e.persist();
        this.setState((prevState)=>({...prevState, form:{...prevState.form, end_date:e.target.value}}));
    }
    handleChangeInicio=(e)=>{
        e.persist();
        this.setState((prevState)=>({...prevState, form:{...prevState.form, start_submit:e.target.value}}));
    }
    handleChangeDeadline=(e)=>{
        e.persist();
        this.setState((prevState)=>({...prevState, form:{...prevState.form, deadline:e.target.value}}));
    }
    handleChangeAreaConcentracao=(e)=>{
        e.persist();
        console.log(e.target.options[e.target.selectedIndex].id)
        this.setState((prevState)=>({...prevState, form:{...prevState.form, concentration_area:e.target.options[e.target.selectedIndex].id}}), ()=>{this.getRevisores(e.target.value)});
    }
    handleChangeKeywords=(e)=>{
        let selectedOptions = [];
        for(let i = 0; i < e.target.options.length; ++i){
            if(e.target.options[i].selected){
                selectedOptions.push(e.target.options[i].id);
            }
        }

        console.log(selectedOptions)
        this.setState((prevState)=>({...prevState, form:{...prevState.form, keywords:selectedOptions}}));
    }
    handleChangeRevisores=(e)=>{
        let selectedOptions = [];
        for(let i = 0; i < e.target.options.length; ++i){
            if(e.target.options[i].selected){
                selectedOptions.push(e.target.options[i].id);
            }
        }

        console.log(selectedOptions)
        this.setState((prevState)=>({...prevState, form:{...prevState.form, reviewers:selectedOptions}}));
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

    getAreaConcentracao= ()=>{
        axios.get(`http://localhost:8000/api/concentration_area/`)
        .then((response)=>{
            this.setState(
                (prev)=>(
                    {
                        ...prev,
                        acOpt:response.data.map((ac)=>(<option id={`${ac.concentration_area_id}`}>{ac.area}</option>))
                    }
                )
            );
        
        })

    }

    getKeywords=()=>{
        axios.get(`http://localhost:8000/api/keyword/`)
        .then((response)=>{
            this.setState(
                (prev)=>(
                    {
                        ...prev,
                        keywordOpt:response.data.map((k)=>(<option id={`${k.keyword_id}`}>{k.keyword}</option>))
                    }
                )
            );

        })
    }

    getRevisores=(ac)=>{
        axios.get(`http://127.0.0.1:8000/api/professor/?search_area=${ac}`)
        .then((response)=>{
            console.log(response)
            this.setState((prev)=>({...prev,revOpt:response.data.map((rev)=>(<option id={`${rev.id}`}>{rev.name}</option>))}))
        
        })
    }

    handleListClick(evento){
        this.setState( (prevState) =>
           ( 
                {
                    ...prevState,
                    component:  <React.Fragment>
                                    <List selectable={false} listOf="evento" element={evento}/>
                                    <form onSubmit={this.handleSubmit} id = "mainForm" >
                                    <div style={formGroupStyle} className="form-group">
                                        <label >Nome:</label>
                                        <input onChange={this.handleChangeName} type="text" className="form-control" id="input-nome" placeholder="Nome do Evento"/>
                                    </div>
                                    <div className="form-row">
                                        <div style={formGroupStyle} className="form-group col-md-12">
                                            <label >Sigla</label>
                                            <input id="sigla" onChange={this.handleChangeSigla} type="text" className="form-control" placeholder="Sigla"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={formGroupStyle} className="form-group col-md-6">
                                                <label >Data de Inicio</label>
                                                <input id="data-inicio" onChange={this.handleChangeDataRealizacao} type="date" className="form-control" />
                                        </div>
                                        <div style={formGroupStyle} className="form-group col-md-6">
                                                <label >Data de Fim</label>
                                                <input id="data-fim" onChange={this.handleChangeFim} type="date" className="form-control" />
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
                                        <select onChange={this.handleChangeAreaConcentracao} className="form-control">
                                            {this.state.acOpt}
                                        </select>
                                    </div>

                                    <div className="form-row">
                                        <div style={formGroupStyle} className="form-group col-md-6">
                                            <label>Palavras-Chave (Ctrl + Clique)</label>
                                            <select onChange={this.handleChangeKeywords} multiple className="form-control" id="keyword">
                                                {this.state.keywordOpt}
                                            </select>
                                        </div>
                                        <div style={formGroupStyle} className="form-group col-md-6">
                                            <label>Revisores (Ctrl + Clique)</label>
                                            <select multiple  onChange={this.handleChangeRevisores} className="form-control" id="revisores">
                                                {this.state.revOpt}
                                            </select>
                                        </div>
                                    </div>

                                    <button type="submit" style={{transition:'500ms'}} className="btn btn-primary">Concluir Alteração</button>
                                </form>
                                </React.Fragment>
                }
            )
            
        );
    }

    componentDidMount(){
        this.getAreaConcentracao();
        this.getKeywords();
    }

    render() {
        return (
            <div style={{margin:'2% 0', width:'30em'}}>
                <h2>Editar Evento</h2>
                {this.state.component}
            </div>
        )
    }
}