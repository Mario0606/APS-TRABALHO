import React, { Component } from 'react'
import Login from './Login.js';
import Logout from './Logout.js';
import  {Link} from 'react-router-dom';
import logoPequena from '../images/logo-pequena.png';
import logoTitulo from '../images/logo-titulo.png';

const navbarStyle = {
    padding:'0',
    margin:'0',
    width: '20%',
    justifyContent: 'flex-start'
};

const linhaStyle = {
    display:'block',
    height:'0',
    width:'100%',
    justifyContent: 'center',
    borderBottom: '0.1em solid #D5E1A3',
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)'
};

class NavBar extends Component {

    dinamicRightSide = (userLogged)=>{
        return userLogged? <Logout userLoggedChange={this.props.userLoggedChange}/>: <Login userLoggedChange={this.props.userLoggedChange}/>;
    }

    render() {
        return (
            <React.Fragment>
                <div style={{display:'flex', flexFlow:'row nowrap', justifyContent:'space-between', width:'100%'}}>
                    <nav style={navbarStyle}>
                        <Link style={{display:'flex', flexFlow:'row nowrap', alignItems:'center'}} to={this.props.userData.userLogged?"/user=":"/"}>
                            <img src={logoPequena} style={{margin:'3% 0'}} alt="logo" width="40%"/>
                            <img src={logoTitulo} style={{marginLeft:'5%'}} alt="ArtileSearch" width="100%"/> 
                        </Link>
                    </nav>
                   
                    {this.dinamicRightSide(this.props.userData.userLogged)}

                </div>
                <div style={linhaStyle}></div>
            </React.Fragment>
        )
    }
}

export default NavBar;