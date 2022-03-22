import React, { Component } from 'react'
import StatsService from '../../services/StatsService';
import { Chart } from "react-google-charts";


class ChartMoradias extends Component {
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
                    chartType="Bar"
                    data={[
                            ['Moradias de Refugiados', 'Apartamentos', 'Casa', 'Quartos'],
                            ['Apartamentos, Casa, Quartos', this.state.stats.moradias, this.state.stats.moradias, this.state.stats.moradias],
                         ]} 
                    options={{
                        height: 400,
                        title: 'Moradias dos Refugiados'
                    }}                
                    legendToggle            
                />
            </div>           
        )
    }
}

export default ChartMoradias