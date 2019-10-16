import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid'

export default class ListBody extends Component {
    
    constructor(props){
        super(props);
        switch(this.props.listOf){
            case "all-keywords":
                this.state={
                    items:[
                        {
                            keyword: 'Computação',
                            creation: '22/10/2019 12:43:11',
                            lastUpdate: '12/11/2019 16:30:32'
                        },
                        {
                            keyword: 'Biologia',
                            creation: '13/06/2018 16:36:32',
                            lastUpdate: null
                        },
                        {
                            keyword: 'Matemática',
                            creation: '11/12/2016 06:45:19',
                            lastUpdate: '12/12/2017 17:37:39'
                        }
                    ]
                }
                break;
                case "all-ac":
                        this.state={
                            items:[
                                {
                                    keyword: 'Filosofia',
                                    creation: '22/10/2019 12:43:11',
                                    lastUpdate: '12/11/2019 16:30:32'
                                },
                                {
                                    keyword: 'Física',
                                    creation: '13/06/2018 16:36:32',
                                    lastUpdate: null
                                },
                                {
                                    keyword: 'Química',
                                    creation: '11/12/2016 06:45:19',
                                    lastUpdate: '12/12/2017 17:37:39'
                                }
                            ]
                        }
                        break;
                case "all-events":
                    this.state={
                            items:[
                                {
                                    name:'a',
                                    sigla:'fasdf',
                                    data_realizacao:'dfad',
                                    inicio:'fadfdsf',
                                    deadline:'fddfsa',
                                    area_concentracao:'dfdf',
                                    keywords:'dfad',
                                    revisores:'dfas'
                                },
                                {
                                    name:'b',
                                    sigla:'fasdf',
                                    data_realizacao:'dfad',
                                    inicio:'fadfdsf',
                                    deadline:'fddfsa',
                                    area_concentracao:'dfdf',
                                    keywords:'dfad',
                                    revisores:'dfas'
                                },
                                {
                                    name:'c',
                                    sigla:'fasdf',
                                    data_realizacao:'dfad',
                                    inicio:'fadfdsf',
                                    deadline:'fddfsa',
                                    area_concentracao:'dfdf',
                                    keywords:'dfad',
                                    revisores:'dfas'
                                }
                            ]
                        }
                        break;
            case "keyword":
            case "area-concentracao":
            case "evento":
                this.state={
                    items:[
                        {
                            ...this.props.element
                        }
                    ]
                }
                break;
            default:
                this.state={
                    items:[]
                }
        }
        
    }
    
    render() {
        return (
            <React.Fragment>
                {this.state.items.map((item)=>{
                    return(
                        <tr className={this.props.selectable?"selectable":''} key={uuid.v4()} onClick={this.props.selectable?this.props.handleClick.bind(this, item): null}>
                            {Object.keys(item).map((key)=>( <td key={uuid.v4()}>{ item[key]? item[key] : '-' }</td> ))}
                        </tr>
                    );
                })}
            </React.Fragment>
        );
    }
}
