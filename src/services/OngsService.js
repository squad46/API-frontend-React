import axios from 'axios';
const ONGS_API_BASE_URL = 'http://localhost:8080/ongs';

class OngsService {
    getOngs(){
        return axios.get(ONGS_API_BASE_URL);
    }

    createOng(ong){
        return axios.post(ONGS_API_BASE_URL, ong);
    }

    getOngById(ongId){
        return axios.get(ONGS_API_BASE_URL + '/' + ongId);
    }

    updateOng(ong, ongId){
        return axios.put(ONGS_API_BASE_URL + '/' + ongId, ong);
    }

    deleteOng(ongId){
        return axios.delete(ONGS_API_BASE_URL + '/' + ongId);
    }
}

export default new OngsService()