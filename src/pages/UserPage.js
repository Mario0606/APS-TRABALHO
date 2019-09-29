import React, { Component } from 'react'
import MenuProfessor from '../components/MenuProfessor.js'
import MenuAluno from '../components/MenuAluno.js'
import MenuAdm from '../components/MenuAdm.js'
import SearchBar from '../components/SearchBar.js'

const userPageStyle = {
    display:'flex',
    flexFlow:'row nowrap',
    alignItems:'flex-start',
    justifyContent: 'space-between',
    minHeight:'450px'
}

const searchBarStyle = {
    display:'flex',
    flexFlow:'column nowrap',
    width:'55%',
    alignItems:'center',
    justifyContent: 'flex-start'
}

export default class UserPage extends Component {
    render() {
        return (
            <div style={userPageStyle}>
                {this.switchMenu(this.props.userData.userType)}
            </div>
        )
    }

    switchMenu(userType){
        let component;
        switch (userType){
            case 'aluno':
                 component = <MenuAluno style={{marginLeft:'50%'}}></MenuAluno>;
                 break;
            case 'professor':
                 component = <MenuProfessor style={{marginLeft:'50%'}}></MenuProfessor>;
                 break;
            case 'adm':
                 component = <MenuAdm style={{marginLeft:'50%'}}></MenuAdm>;
                 break;
            default:
                return <h1>{userType} Not a valid Type</h1>;
         }
         return (
                <React.Fragment>
                    {component}
                    <div style={searchBarStyle}>
                        <SearchBar/>
                    </div>
                </React.Fragment>)
    }
}
