import axios from 'axios';

export function getCalls() {
    return axios.get('http://localhost:8080/calls');
}

export function getAgents(id) {
    return axios.get('http://localhost:8080/agent/'+id);
}

export function getNumbers(number) {
    return axios.get('http://localhost:8080/calls/'+number);
}