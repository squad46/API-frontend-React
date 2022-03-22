import React, { Component } from 'react'
import StatsService from '../../services/StatsService';

class Stats extends Component {

    constructor(props) {
        super(props)

        this.state = {
            stats: {}
        }

    }
    componentDidMount(){
      
        StatsService.getStats().then((res) => {
            console.log(res.data);
            this.setState({ stats: res.data});
        });  
    }

    render() {
        return (
            <div className="container">
                <h1 className="">Seja bem vindo ao Einstein</h1>
                <h3 className="titulo-paginas">Dados da plataforma</h3>

                <p>Pessoas:  {this.state.stats.pessoas}</p>
                <p>Homens: {this.state.stats.pessoasHomens}</p>
                <p>Homens percentual: {this.state.stats.pessoasHomensPercent}%</p>
                <p>Mulheres: {this.state.stats.pessoasMulheres}</p>
                <p>Mulheres percentual: {this.state.stats.pessoasMulheresPercent}%</p>
                <p>Não informou: {this.state.stats.pessoasOutros}</p>
                <p>Não informou percentual: {this.state.stats.pessoasOutrosPercent}%</p>
                <br />

                <p>Moradia: {this.state.stats.moradias}</p>
                <p>Apartamentos: {this.state.stats.moradiasApartamentos}</p>
                <p>Casa: {this.state.stats.moradiasCasas}</p>
                <p>Quartos: {this.state.stats.moradiasQuarto}</p>
                <br />

                <p>Empregos: {this.state.stats.empregos}</p>
                <p>Autônomo: {this.state.stats.empregosAutonomo}</p>
                <p>CLT: {this.state.stats.empregosClt}</p>
                <p>PJ: {this.state.stats.empregosPj}</p>
                <p>Temporário: {this.state.stats.empregosTemporario}</p>
                <br />

                <p>Ongs: {this.state.stats.ongs}</p>
            </div>
        )
    }
}

export default Stats