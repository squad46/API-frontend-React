import React, { Component } from 'react'
import StatsService from '../../services/StatsService';
import { Chart } from "react-google-charts";


class ChartOngs extends Component {
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
                          ['Ongs Cadastradas', 'Total', ''],
                          ['Ongs', this.state.stats.ongs, 0],
                        ]} 
                    options={{
                        height: 400,
                        title: 'Ongs Cadastradas'
                    }}                
                    legendToggle            
                />
            </div>           
        )
    }
}

export default ChartOngs