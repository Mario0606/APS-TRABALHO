import React, { Component } from 'react'

// const logoutBtnStyle ={
//     color:'white',
//     margin: '1%',
//     borderRadius: '0.5rem',
//     backgroundColor: 'rgb(221, 66, 27)',
//     border:'1px solid #ced4da',
// }

export default class Logout extends Component {
    routeChange() {
        let path = '/';
        this.props.history.push(path);
    }

    render() {
        return (
            <React.Fragment>
                <button type="submit" className="btn btn-default red-btn" onClick={this.props.userLoggedChange.bind(this, false, true)}>Logout</button>
            </React.Fragment>
        )
    }
}
