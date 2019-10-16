import React, { Component } from 'react';
import './SearchEventBar.css';

const searchCheckStyle = {
    display: 'flex',
    margin:'auto',
    flexFlow: 'row nowrap',
    alignItems:'center',
    justifyContent:'flex-start',
};

export default class SearchBar extends Component {
    
    state={
        search:'',
        filter:'',
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.search(this.state);
    }

    handleSearchChange = (e)=>{
        e.persist();
        this.setState((prevState)=>({search:e.target.value, filter:prevState.filter}));
    }

    handleChangeFilter = (e) =>{
        e.persist();
        this.setState((prevState)=>({search: prevState.search, filter: e.target.value}), ()=>console.log(e.target.value));
    }


    componentDidMount(){
        let optionsList = document.getElementsByClassName("form-check-input");
        
        for(let i = 0; i < optionsList.length; ++i){
            if(optionsList.item(i).defaultChecked){      
                this.setState((prevState)=>({search:prevState.search, filter:optionsList.item(i).value}));

            }
        }

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{width:'100%'}} className="form-inline ">

                <div style={{width:'100%', display:'flex', flexFlow:'row nowrap', alignItems:'center'}}>
                    <input id="searchEvent" className="form-control form-control-sm" type="text" placeholder="Pesquise por um Evento"
                    aria-label="Search" onChange={this.handleSearchChange}/>
                    <i style={{margin:'5% 0  0 2%', color:'black'}} className="fas fa-search" aria-hidden="true"></i>
                </div>
                

                <div style={searchCheckStyle} className="form-group" onChange={this.handleChangeFilter}>
                    <label style={{dislay:'inline-block', margin:'0 0 0 0.5rem'}}>Pesquisar por: </label>
                    <div style={{margin:'0 0.5rem'}} className="form-check">
                        <input className="form-check-input" type="radio" name="filtro"  value="nome" defaultChecked/>
                        <label className="form-check-label">
                            Nome
                        </label>
                    </div>
                    <div style={{margin:'0 0.5rem 0 0'}} className="form-check">
                        <input className="form-check-input" type="radio" name="filtro"  value="status" />
                        <label className="form-check-label">
                            Situação
                        </label>
                    </div>
                    <div style={{margin:'0 0.5rem 0 0'}} className="form-check">
                        <input className="form-check-input" type="radio" name="filtro"  value="keyword" />
                        <label className="form-check-label">
                            Palavras-Chave
                        </label>
                    </div>
                </div>
            </form>
        )
    }
}
