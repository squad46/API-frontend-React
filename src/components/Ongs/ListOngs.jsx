import React, { Component } from 'react'
import './Ongs.css';
import OngsService from '../../services/OngsService';

class ListOngs extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ongs: []
    }
    this.addOng = this.addOng.bind(this);
    this.editOng = this.editOng.bind(this);
    this.deleteOng = this.deleteOng.bind(this);
  }

  deleteOng(id) {
    OngsService.deleteOng(id).then(res => {
      this.setState({ ongs: this.state.ongs.filter(ong => ong.id !== id) });
    });
  }
  viewOng(id) {
    this.props.history.push(`/details-ong/${id}`);
  }
  editOng(id) {
    this.props.history.push(`/add-ongs/${id}`);
  }

  componentDidMount() {
    OngsService.getOngs().then((res) => {
      this.setState({ ongs: res.data });
    });
  }

  addOng() {
    this.props.history.push('/add-ongs/_add');
  }

  render() {
    return (
      <div className='container'>
        <h2 className='ongs_title'> Lista de Ongs </h2>
        <div className='d-grid'>
          <button className="btn bt_add m-2" onClick={this.addOng}> Adicionar </button>
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
              {
                this.state.ongs.map(
                  ong =>
                    <tr key={ong.id}>
                      <td className='text-center'> {ong.id} </td>
                      <td className='text-center'> {ong.nome} </td>
                      <td className='text-center'> {ong.descricao} </td>
                      <td className='text-center'> {ong.site} </td>
                      <td className='text-center'> <img src={ong.imagem} style={{width:"70%"}} alt=""></img> </td>
                      <td>
                        <div className='btns_space'>
                          <button className='btn bt_att' onClick={() => this.editOng(ong.id)}> Atualizar </button>
                          <button className='btn bt_dtlhs' onClick={() => this.viewOng(ong.id)} style={{ marginLeft: "15px" }}> Detalhes </button>
                          <button className='btn btn-danger' onClick={() => this.deleteOng(ong.id)} style={{ marginLeft: "15px" }}> Deletar </button>
                        </div>
                      </td>
                    </tr>
                )
              }
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