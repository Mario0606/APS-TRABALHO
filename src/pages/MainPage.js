import React, { Component } from 'react'
import logo from '../images/logo_grande.png';
import  {Link} from 'react-router-dom';

  const cadastroBtnStyle = {
    color:'white',
    margin: '1%',
    borderRadius: '0.5rem',
    backgroundColor: '#61E294',
    border:'1px solid #ced4da',
    fontSize:'2em',
  };
  

export default class MainPage extends Component {

    constructor(props){
        super(props);
        if(this.props.userData.userLogged){
            this.props.history.push('/user=');
        }
    }

    render() {
        return(
            <div style={{display:'flex', flexFlow:'column nowrap', alignItems:'center', justifyContent:'center'}}>
                <img src={logo} style={{margin:'3% 0'}} alt="ArticleSearch" width="400em" />
                <Link to="/cadastro" style={{width: '24em'}}>
                    <button style={cadastroBtnStyle} type="submit" className="btn btn-default">Cadastre-se</button>
                </Link >
            </div>
        );
    }
}
