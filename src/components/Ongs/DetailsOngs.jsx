import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logotipo-new.svg'

export class DetailsOngs extends Component {
    render() {
        return (
            <div className='details_ongs'>
                <div class="card mb-3" style={{ maxWidth: "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={logo} class="img-fluid rounded-start" style={{ marginTop: "10px", padding: "5px" }} alt="logo da ong" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Cáritas</h5>
                                <p class="card-text">
                                    É uma ong que desde a sua fundação, tem a prática de ouvir respeitosamente o sofrimento dos empobrecidos e dos que estão em situação de vulnerabilidade e fornecer ferramentas para transformar suas vidas.
                                </p>
                                <p class="card-text"><small class="text-muted">www.caritas.com</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bt_vlt d-grid col-2 mx-auto'>
                    <Link to="/ongs" className='btn btn-danger'> Voltar </Link>
                </div>
            </div>
        )
    }
}

export default DetailsOngs