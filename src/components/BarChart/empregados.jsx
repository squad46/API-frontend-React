import React, { Component } from 'react'
import StatsService from '../../services/StatsService';
import { Chart } from "react-google-charts";


class ChartEmpregados extends Component {
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
                        ['Refugiados Trabalhando', 'Autônomo', 'CLT', 'PJ', 'Temporário'],
                        ['Empregados', this.state.stats.empregos, this.state.stats.empregos, this.state.stats.empregos, this.state.stats.empregos],
                         ]} 
                    options={{
                        height: 400,
                        title: 'Refugiados Empregados'
                    }}                
                    legendToggle            
                />
            </div>           
        )
    }
}

export default ChartEmpregados