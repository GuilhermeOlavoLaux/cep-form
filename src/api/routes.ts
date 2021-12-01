import axios from "axios";

const cepRoute = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})


export default cepRoute;