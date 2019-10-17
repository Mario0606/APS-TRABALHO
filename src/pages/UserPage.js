import React, { Component } from 'react';
import UserMenu from '../components/UserMenu.js';
import SearchBar from '../components/SearchBar.js';
import DeletarCadastro from '../components/DeletarCadastro.js';
import EditarCadastroForm from '../components/EditarCadastroForm.js';
import CriarKeyword from '../components/CriarKeyword.js';
import EditarKeyword from '../components/EditarKeyword.js';
import RemoverKeyword from '../components/RemoverKeyword.js';
import CriarAreaConcentracao from '../components/CriarAreaConcentracao.js';
import EditarAreaConcentracao from '../components/EditarAreaConcentracao.js';
import RemoverAreaConcentracao from '../components/RemoverAreaConcentracao.js';
import PesquisarEvento from '../components/PesquisarEvento.js';
import CriarEvento from '../components/CriarEvento.js';
import EditarEvento from '../components/EditarEvento.js';
import RemoverEvento from '../components/RemoverEvento.js';
import SubmeterArtigo from '../components/SubmeterArtigo.js';
import './UserPage.css';


const userPageStyle = {
    display:'flex',
    flexFlow:'row nowrap',
    alignItems:'flex-start',
    justifyContent: 'space-between',
    minHeight:'450px'
}

export default class UserPage extends Component {

    constructor(props){
        super(props);
        this.state = { selected: null };
    }

    chageSelected=(newSelected)=>{
        this.setState({selected:newSelected}, ()=> console.log(this.state.selected, newSelected))
        
    }

    render() {
        return (
            <div style={userPageStyle}>
                <UserMenu userData={this.props.userData} changeSelected={this.chageSelected} style={{marginLeft:'50%'}}/>
                {this.switchContent()}
            </div>
        )
    }
    
    switchContent(){
        let component;
        switch (this.state.selected){
            case 'remover-cadastro':
                 component = <DeletarCadastro userLoggedChange={this.props.userLoggedChange} userData={this.props.userData} displayAlert={this.props.displayAlert}/>;
                 break;
            case 'editar-cadastro':
                 component = <EditarCadastroForm userData={this.props.userData} displayAlert={this.props.displayAlert}/>;
                 break;
            case 'criar-keyword':
                 component = <CriarKeyword displayAlert={this.props.displayAlert}/>;
                 break;                 
            case 'editar-keyword':
                component = <EditarKeyword displayAlert={this.props.displayAlert}/>;
                break;
            case 'remover-keyword':
                component = <RemoverKeyword displayAlert={this.props.displayAlert}/>;
                break;
            case 'criar-ac':
                component = <CriarAreaConcentracao displayAlert={this.props.displayAlert}/>;
                break;
            case 'editar-ac':
                component = <EditarAreaConcentracao displayAlert={this.props.displayAlert}/>;
                break; 
            case 'remover-ac':
                component = <RemoverAreaConcentracao displayAlert={this.props.displayAlert}/>;
                break;
            case 'pesquisar-evento':
                component = <PesquisarEvento/>
                break;
            case 'criar-evento':
                component = <CriarEvento displayAlert={this.props.displayAlert}/>
                break;
            case 'editar-evento':
                component = <EditarEvento displayAlert={this.props.displayAlert}/>
                break;
            case 'remover-evento':
                component = <RemoverEvento displayAlert={this.props.displayAlert}/>
                break;
            case 'submeter-artigo':
                component = <SubmeterArtigo displayAlert={this.props.displayAlert}/>
                break;
                
            default:
                 component = '';
         }

         
         return (
                <React.Fragment>
                    {component}
                </React.Fragment>)
    }
}
