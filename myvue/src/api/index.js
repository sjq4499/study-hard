import axios from 'axios';

export function getlist() {
    return axios.get('/api/list');
}