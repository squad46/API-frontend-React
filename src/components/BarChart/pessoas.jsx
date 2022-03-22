import React, { Component } from 'react'
import StatsService from '../../services/StatsService';
import { Chart } from "react-google-charts";


class ChartPessoas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stats: {}
        }
    }
    
    componentDidMount(){      
        StatsService.getStats().then((res) => {
            this.setState({ stats: res.data});
        });  
    }

    render() {
        return (            
            <div className="m-5">                         
                <Chart
                    chartType="PieChart"
                    data={[
                            ['Refugiados por Genero', 'Qtdd'],
                            ['Mulheres', this.state.stats.pessoasHomens],
                            ['Homens', this.state.stats.pessoasMulheres],
                            ['Outros', this.state.stats.pessoasOutros]
                         ]} 
                    options={{
                        height: 400,
                        title: 'Refugiados por Genero'
                    }}                
                    legendToggle            
                />
            </div>           
        )
    }
}

export default ChartPessoas