import React, { Component } from 'react';
import './Button.css'
import './LoginForm.css'

const formStyle = {
    display: 'flex',
    flexFlow:'row nowrap',
    alignItems:'center',
    width: 'auto'
};

// const formItemStyle = {
//     margin: '1%',
//     borderRadius: '2rem',
//     border: '1px solid #1958BD'
// };

// const loginBtnStyle = {
//     color:'white',
//     margin: '1%',
//     borderRadius: '0.5rem',
//     backgroundColor: '#61E294',
//     border:'1px solid #ced4da',
// };

class Login extends Component {
    state={
        email:'',
        password:''
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    render() {
        
        return (
            <form id="loginForm" onSubmit={this.handleSubmit} style={formStyle} action="/action_page.php">
               
                <label className="sr-only">Email address:</label>
                <input onChange={this.handleEmailChange} type="email" className="form-control" id="email" placeholder="email"/>
            
                <label className="sr-only">Password:</label>
                <input onChange={this.handlePasswordChange} type="password" className="form-control" id="pwd" placeholder="senha"/>
                
                <button  type="submit" className="btn btn-default green-btn" onClick={this.props.userLoggedChange.bind(this, this.state, false)} >Login</button>
            </form>
        )
    }
}

export default Login;