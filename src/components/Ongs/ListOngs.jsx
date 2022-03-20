import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ListOngs extends Component {
  render() {
    return (
      <div className='container'>
        <h2 className='ongs_title'> Lista de Ongs </h2>
        <div className='d-grid'> {/* pra deixar o botão pequeno é só remover essa div */}
          <Link to="/add-ongs" className="btn bt_add m-2"> Adicionar </Link>
        </div>
        <br />
        <div className='ongs_table table-responsive'>
          <table className='table table-bordered table-striped border border-2'>
            <thead>
              <tr>
                <th className='text-center'> # </th>
                <th className='text-center'> NOME </th>
                <th className='text-center'> DESCRIÇÃO </th>
                <th className='text-center'> SITE </th>
                <th className='text-center'> FOTO </th>
                <th className='text-center'> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text-center'> 1 </td>
                <td className='text-center'> Cáritas </td>
                <td className='text-center'> É uma ong que desde a sua fundação, tem a prática de ouvir respeitosamente o sofrimento dos empobrecidos e dos que estão em situação de vulnerabilidade e fornecer ferramentas para transformar suas vidas. </td>
                <td className='text-center'> www.caritas.com </td>
                <td className='text-center'> url da imagem </td>
                <td>
                  <div className='btns_space'>
                    <Link className='btn bt_att' to={`/edit-ong/`}> Atualizar </Link>
                    <Link className='btn bt_dtlhs' to={`/details-ong/`} style={{ marginLeft: "15px" }}> Detalhes </Link>
                    <button className='btn btn-danger' style={{ marginLeft: "15px" }}> Deletar </button>
                  </div>
                </td>

              </tr>
              {/* excluir daqui */}
              <tr>
                <td className='text-center'> 2 </td>
                <td className='text-center'> ACNUR </td>
                <td className='text-center'> É uma ong que desde a sua fundação, tem a prática de ouvir respeitosamente o sofrimento dos empobrecidos e dos que estão em situação de vulnerabilidade e fornecer ferramentas para transformar suas vidas.</td>
                <td className='text-center'> www.acnur.com </td>
                <td className='text-center'> url da imagem </td>
                <td>
                <div className='btns_space'>
                    <Link className='btn bt_att' to={`/edit-ong/`}> Atualizar </Link>
                    <Link className='btn bt_dtlhs' to={`/details-ong/`} style={{ marginLeft: "15px" }}> Detalhes </Link>
                    <button className='btn btn-danger' style={{ marginLeft: "15px" }}> Deletar </button>
                  </div>
                </td>
              </tr>
              {/* até aqui */}
            </tbody>
          </table>
        </div>
        <br />
        <br />
      </div>
    )
  }
}

export default ListOngs