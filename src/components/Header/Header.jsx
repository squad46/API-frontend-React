import React, { Component } from 'react'
import logo from '../../images/logotipo-new.svg'

export class Header extends Component {
    render() {
        return (
            <div className='ong_header'>
                    <nav className='menu_top shadow-sm row fixed-top'>
                        <div className='col d-flex align-items-center justify-content-center'>
                        <a class="brand_adm navbar-brand" href="/">Painel Administrativo</a>
                            <div className='logotype flex-fill text-center'>
                                <a href="https://projetoandor.azurewebsites.net/" className='logo'>
                                    <img src={logo} width="160px"></img>
                                </a>
                            </div>
                        </div>
                    </nav>
            </div >
        )
    }
}

export default Header