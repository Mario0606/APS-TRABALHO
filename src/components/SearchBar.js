import React, { Component } from 'react'

const searchCheckStyle = {
    display: 'flex',
    margin:'auto',
    flexFlow: 'row nowrap',
    alignItems:'center',
    justifyContent:'flex-start',
};

export default class SearchBar extends Component {
    render() {
        return (
            <form style={{width:'100%'}} className="form-inline ">
                <input  style={{margin:'10% 1% 1% 10%'}} className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Pesquise por um Evento"
                    aria-label="Search"/>

                <div style={searchCheckStyle} className="form-group">
                    <label style={{dislay:'inline-block', margin:'0 0 0 0.5rem'}}>Pesquisar por: </label>
                    <div style={{margin:'0 0.5rem'}} className="form-check">
                        <input className="form-check-input" type="radio" name="filtro"  value="nome" onClick={this.changeField}/>
                        <label className="form-check-label">
                            Nome
                        </label>
                    </div>
                    <div style={{margin:'0 0.5rem 0 0'}} className="form-check">
                        <input className="form-check-input" type="radio" name="filtro"  value="status" onClick={this.changeField}/>
                        <label className="form-check-label">
                            Situação
                        </label>
                    </div>
                    <div style={{margin:'0 0.5rem 0 0'}} className="form-check">
                        <input className="form-check-input" type="radio" name="filtro"  value="keyword" onClick={this.changeField}/>
                        <label className="form-check-label">
                            Palavras-Chave
                        </label>
                    </div>
                </div>
            </form>
        )
    }
}
