import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AddOngs extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <br />
                            <h2 className='ongs_title'> Adicionar Ong </h2>
                            <div className='card-body'>
                                <form>
                                    <div className='form-floating mb-3'>
                                        <input
                                            type="text"
                                            placeholder='Insira o nome da Ong'
                                            name="nomeOng"
                                            className='form-control'
                                        >
                                        </input>
                                        <label for="floatingInput">Nome da Ong</label>
                                    </div>

                                    <div className='form-floating mb-3'>
                                        <input
                                            type="text"
                                            placeholder='Insira uma descrição para Ong'
                                            name="descricaoOng"
                                            className='form-control'
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
                                            className='form-control' >
                                        </input>
                                     </div> */}
                                    <div className='d-grid gap-2 col-6 mx-auto' style={{marginTop:"30px", marginBottom:"20px"}}>
                                        <button className='btn bt_att'> Salvar </button>
                                        <Link to="/ongs" className='btn btn-danger'> Cancel </Link>
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