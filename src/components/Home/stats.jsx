import React, { Component } from 'react';
import StatsService from '../../services/StatsService';
import ChartMoradias from '../BarChart/moradias';
import ChartEmpregos from '../BarChart/empregados';
import ChartOngs from '../BarChart/ongs';
import ChartPessoas from '../BarChart/pessoas';

class Stats extends Component {

    constructor(props) {
        super(props)

        this.state = {
            stats: {}
        }

    }
    componentDidMount() {

        StatsService.getStats().then((res) => {
            console.log(res.data);
            this.setState({ stats: res.data });
        });
    }

    render() {
        return (
            <div className="container">

                <h2 className="font-weight-bold">Seja bem vindo ao Einstein</h2>
                <p className="titulo-paginas">Dados da plataforma</p>
                <div class="container card-simple justify-content-center d-flex flex-wrap mb-5 py-5">
                    <div className='row w-100 text-center'>
                        <h4 className='col font-weight-bold'>Pessoas por Genero</h4>
                        <h4 className='col font-weight-bold'>Empregos Cadastrados</h4>
                    </div>
                    <ChartPessoas />
                    
                    <ChartEmpregos />

                    <div className='row w-100 text-center'>
                        <h4 className='col font-weight-bold'>Moradias Cadastradas</h4>
                        <h4 className='col font-weight-bold'>Ongs Cadastradas</h4>
                    </div>
                    <ChartMoradias />
                    <ChartOngs />
                </div>
                
                {/*
                <p>Pessoas:  {this.state.stats.pessoas}</p>

                <h1 className="border-bottom pb-2 mb-4">Seja bem vindo ao Einstein</h1>
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
            */}
            </div>

        )
    }
}

export default Stats