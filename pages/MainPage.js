import React, { Component } from 'react'
import logo from '../images/logo_grande.png';
import '../components/Button.css'
import  {Link} from 'react-router-dom';

  const cadastroBtnStyle = {
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
                <img src={logo} style={{margin:'5% 0', width:'25em'}} alt="ArticleSearch" />
                <Link to="/cadastro" style={{width: '24em', marginBottom:'4%'}}>
                    <button style={cadastroBtnStyle} type="submit" className="btn btn-default green-btn">Cadastre-se</button>
                </Link >
            </div>
        );
    }
}
