import * as axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const getMovies = (page, language) => {
    return axios
    .get(`${API_URL}top_rated?api_key=${API_KEY}&language=${language}&page=${page}`)
    .then(response => {
        return response.data.results;
    })
}

const getMovie = (id, language) => {
    return axios
    .get(`${API_URL}${id}?api_key=${API_KEY}&language=${language}`)
    .then(response => {
        return response.data;
    })
}

const getCast = (id, language) => {
    return axios
    .get(`${API_URL}${id}/credits?api_key=${API_KEY}&language=${language}`)
    .then(response => {
        return response.data.cast;
    })
}


export { getMovies, getMovie, getCast };

