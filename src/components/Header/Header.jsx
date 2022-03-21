import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/logotipo-new.svg';
import miniLogo from '../../images/logotipo-icon.svg';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="brand_adm navbar-brand" href="/">Painel Administrativo</a>
                        <a href="https://projetoandor.azurewebsites.net/" className="mini_logo" style={{ visibility: "hidden" }}>
                            <img src={miniLogo} width="30px" ></img> </a>
                        <div className='logotype flex-fill text-center'>
                            <a href="https://projetoandor.azurewebsites.net/" className='logo'>
                                <img src={logo} width="160px"></img>
                            </a>
                        </div>
                        <button className="navbar-toggler"
                            onClick={() => { this.setState({ show: !this.state.show }) }} >
                            {this.state.show ? <MenuIcon /> : <CloseIcon />}
                        </button>
                        <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link nav_link" href="#">Estatísticas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav_link" href="#">Ongs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >
        );
    }
}

export default Header;