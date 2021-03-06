import axios from 'axios';

const path = "/equipment";

export default {

    getEquipmentList() {
        return axios.get(path);
    },

    getEquipmentMetrics(){
        return axios.get(path + 'Metrics')
    }
}