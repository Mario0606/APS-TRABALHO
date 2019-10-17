import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid'

export default class ListBody extends Component {
    state={
        items:null,
        component:null
    }
    componentDidMount(){
        let aux;
        switch(this.props.listOf){
            case "all-keywords":
            axios.get(`http://localhost:8000/api/keyword/`)
             .then((response)=>{ 
                aux = response.data;
                this.setState(
                    {
                        items:aux.slice(), 
                        component: aux.map((item)=>{
                            return(
                                <tr className={this.props.selectable?"selectable":''} key={uuid.v4()} onClick={this.props.selectable?this.props.handleClick.bind(this, item): null}>
                                    {Object.keys(item).map((key)=>( <td key={uuid.v4()}>{ item[key]? item[key] : '-' }</td> ))}
                                </tr>
                            );
                        })
                    }
                )
            })
                
            break;
            case "all-events":
            axios.get(`http://localhost:8000/api/events/`)
             .then((response)=>{ 
                aux = response.data;
                this.setState(
                    {
                        items:aux.slice(), 
                        component: aux.map((item)=>{
                            return(
                                <tr className={this.props.selectable?"selectable":''} key={uuid.v4()} onClick={this.props.selectable?this.props.handleClick.bind(this, item): null}>
                                    {Object.keys(item).map((key)=>( <td key={uuid.v4()}>{ item[key]? item[key] : '-' }</td> ))}
                                </tr>
                            );
                        })
                    }
                )
            })
                
            break;
            case "keyword":
            case "area-concentracao":
            case "evento":
                    aux=[{...this.props.element}];
                    this.setState(
                        {
                            items:aux.slice(), 
                            component: aux.map((item)=>{
                                return(
                                    <tr className={this.props.selectable?"selectable":''} key={uuid.v4()} onClick={this.props.selectable?this.props.handleClick.bind(this, item): null}>
                                        {Object.keys(item).map((key)=>( <td key={uuid.v4()}>{ item[key]? item[key] : '-' }</td> ))}
                                    </tr>
                                );
                            })
                        }
                    );
                break;
            case "all-ac":
                axios.get(`http://localhost:8000/api/concentration_area/`)
                    .then((response)=>{ 
                    aux = response.data;
                    this.setState(
                        {
                            items:aux.slice(), 
                            component: aux.map((item)=>{
                                return(
                                    <tr className={this.props.selectable?"selectable":''} key={uuid.v4()} onClick={this.props.selectable?this.props.handleClick.bind(this, item): null}>
                                        {Object.keys(item).map((key)=>( <td key={uuid.v4()}>{ item[key]? item[key] : '-' }</td> ))}
                                    </tr>
                                );
                            })
                        }
                    )
                })

                break;
            default:
                ;
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.component}
            </React.Fragment>
        );
    }
}