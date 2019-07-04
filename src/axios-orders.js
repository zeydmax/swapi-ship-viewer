import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://swapi.co/api/starships/'
})

export default instance;