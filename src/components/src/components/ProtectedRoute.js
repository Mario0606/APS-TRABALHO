import React, { Component } from 'react'

export default class ProtectedRoute extends Component {
    render() {
      
        return ( 
            this.props.userData.userLogged? this.props.component : <h1>Acces Denied or Not Valid User</h1>
        )
    }
}
