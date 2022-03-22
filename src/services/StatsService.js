import axios from 'axios'

const STATS_REST_API_URL = 'http://localhost:8080/stats';

class StatsService {


    getStats(){
        return axios.get(STATS_REST_API_URL);
    }

}

export default new StatsService();