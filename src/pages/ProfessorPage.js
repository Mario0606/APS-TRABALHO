import React, { Component } from 'react'
import MenuProfessor from '../components/MenuProfessor.js'
import SearchBar from '../components/SearchBar.js'

const profPageStyle = {
    display:'flex',
    flexFlow:'row nowrap',
    width:'69%',
    alignItems:'flext-start',
    justifyContent: 'space-between'
}

const searchBarStyle = {
    display:'flex',
    flexFlow:'column nowrap',
    width:'55%',
    alignItems:'center',
    justifyContent: 'flex-start'
}

export default class ProfessorPage extends Component {
    render() {
        return (
            <div style={profPageStyle}>
                <MenuProfessor style={{marginLeft:'50%'}}></MenuProfessor>
                <div style={searchBarStyle}>
                    <SearchBar></SearchBar>
                </div>
            </div>
        )
    }
}
