import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logotipo-new.svg'
import miniLogo from '../../images/logotipo-icon.svg'

function Header() {

    const [isMobile, setIsMobile] = useState(false);

        return (
            <div className='ong_header'>
                    <nav className='menu_top navbar navbar-expand-lg shadow-sm row fixed-top'>
                        <div className='container-fluid align-items-center justify-content-center'>
                        <Link to="/" class="brand_adm navbar-brand">Painel Administrativo</Link> 
                        <a href="https://projetoandor.azurewebsites.net/" className="mini_logo" style={{visibility:"hidden"}}>
                        <img src={miniLogo} width="30px" ></img> </a>
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

export default Header