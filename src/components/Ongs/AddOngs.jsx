import React, { Component } from 'react'
import OngsService from '../../services/OngsService';

export class AddOngs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nome: '',
            descricao: '',
            site: '',
            imagem: ''
        }

        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeDescricaoHandler = this.changeDescricaoHandler.bind(this);
        this.changeSiteHandler = this.changeSiteHandler.bind(this);
        this.changeImagemHandler = this.changeImagemHandler.bind(this);
        this.saveOrUpdateOng = this.saveOrUpdateOng.bind(this);
    }

    componentDidMount() {
        if (this.state.id === '_add') {
            return
        } else {
            OngsService.getOngById(this.state.id).then((res) => {
                let ong = res.data;
                this.setState
                    ({
                        nome: ong.nome,
                        descricao: ong.descricao,
                        site: ong.site,
                        imagem: ong.imagem
                    });
            });
        }
    }
    saveOrUpdateOng = (e) => {
        e.preventDefault();
       
        let ong = { nome: this.state.nome, descricao: this.state.descricao, site: this.state.site, imagem: this.state.imagem };

        console.log('ong => ' + JSON.stringify(ong));

        if (this.state.id === '_add') {
            OngsService.createOng(ong).then(res => {
                this.props.history.push('/ongs');
            });
        } else {
            OngsService.updateOng(ong, this.state.id).then(res => {
                this.props.history.push('/ongs');
            });
        }
    }

    changeNomeHandler = (event) => {
        this.setState({nome: event.target.value });
    }

    changeDescricaoHandler = (event) => {
        this.setState({descricao: event.target.value });
    }

    changeSiteHandler = (event) => {
        this.setState({site: event.target.value });
    }

    changeImagemHandler = (event) => {
        this.setState({imagem: event.target.value });
    }

    cancel() {
        this.props.history.push('/ongs');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Adicionar Ong</h3>
        } else {
            return <h3 className="text-center">Atualizar Ong</h3>
        }
    }

    render() {
        return (
            <div className='form_ongs'>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <br />
                            {
                                this.getTitle()
                            }
                            <div className='card-body'>
                                <form>
                                    <div className='form-floating mb-3'>
                                        <input
                                            type="text"
                                            placeholder='Insira o nome da Ong'
                                            name="nomeOng"
                                            className='form-control'
                                            value={this.state.nome} 
                                            onChange={this.changeNomeHandler}
                                        >
                                        </input>
                                        <label className="floatingInput">Nome da Ong</label>
                                    </div>

                                    <div className='form-floating mb-3'>
                                        <input
                                            type="text"
                                            placeholder='Insira uma descrição para Ong'
                                            name="descricaoOng"
                                            className='form-control'
                                            value={this.state.descricao} 
                                            onChange={this.changeDescricaoHandler}
                                        >
                                        </input>
                                        <label className='floatingInput'> Descrição </label>
                                    </div>

                                    <div className='form-floating mb-3'>
                                        <input
                                            type="text"
                                            placeholder='Insira o site da Ong'
                                            name="siteOng"
                                            className='form-control'
                                            value={this.state.site} 
                                            onChange={this.changeSiteHandler}
                                        >
                                        </input>
                                        <label className='floatingInput'> Site </label>
                                    </div>

                                    <div className='form-floating mb-3'>
                                        <input
                                            type="text"
                                            placeholder='Insira a url da imagem'
                                            name="fotoOng"
                                            className='form-control'
                                            value={this.state.imagem} 
                                            onChange={this.changeImagemHandler}
                                        >
                                        </input>
                                        <label className='floatingInput'> Imagem </label>
                                    </div>

                                    {/* se a foto for file

                                    <div className='form-control mb-3'>
                                    <label className='col-form-label'> Imagem </label>
                                        <input
                                            type="file"
                                            placeholder='Insira uma imagem para a Ong'
                                            name="fotoOng"
                                            className='form-control'
                                            value={this.state.imagem} 
                                            onChange={this.changeImagemHandler}
                                        >
                                        </input>
                                     </div> */}
                                    <div className='d-grid gap-2 col-6 mx-auto' style={{ marginTop: "30px", marginBottom: "20px" }}>
                                        <button className='btn bt_att' onClick={this.saveOrUpdateOng}> Salvar </button>
                                        <button className='btn btn-danger' onClick={this.cancel.bind(this)}> Cancel </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddOngs