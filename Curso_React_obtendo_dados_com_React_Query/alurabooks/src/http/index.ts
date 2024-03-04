import axios from "axios";
import { ICategoria } from "../interfaces/ICategoria";

const http = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
});
export default http;

// Add a request interceptor
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = sessionStorage.getItem('tokenAtual');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, function (error) {
    // Do something with request error
    console.log('Erro no Interceptor do Axios')
    return Promise.reject(error);
});

export const obterCategoriaPorSlug = async (slug: string) => {
    const resposta = await http.get<ICategoria[]>('categorias', {
        params: {
            slug
        }
    })
    return resposta.data[0]
};
