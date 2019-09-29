import React, { Component } from 'react'
import erroImg from '../images/erro-img.png';
//import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class NotFoundPage extends Component {
    render() {
        return (
            <React.Fragment>
                <img src={erroImg} style={{margin:'3% 0'}} alt="ArticleSearch" width="30%" />
            </React.Fragment>
        )
    }
}
