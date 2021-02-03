import * as axios from 'axios';

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "564136068de8b02af82875cabe73fe14";



export const getMovies = (page) => {
    return axios
      .get(`${API_URL}movie/top_rated?api_key=${API_KEY}&language=es-ES&page=${page}`)
      .then(response => {
          console.log(response.data)
          return response.data.results;
        })
  };