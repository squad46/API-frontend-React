import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OngsService from '../../services/OngsService'

export class DetailsOngs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            ong: {}
        }
    }

    componentDidMount(){
        OngsService.getOngById(this.state.id).then( res => {
            this.setState({ong: res.data});
        })
    }

    render() {
        return (
            <div className='details_ongs'>
                <div class="card mb-3" style={{ maxWidth: "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={ this.state.ong.imagem } class="img-fluid rounded-start" style={{ marginTop: "10px", padding: "5px" }} alt="logo da ong" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{ this.state.ong.nome }</h5>
                                <p class="card-text">
                                { this.state.ong.descricao }
                                </p>
                                <p class="card-text"><small class="text-muted">{ this.state.ong.site }</small></p>
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