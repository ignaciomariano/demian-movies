import React, { useEffect, useState } from 'react';
import './index.scss';
import MovieBox from '../../components/MovieBox';
import { getMovies } from '../../services/movies';

function Home () {

  const [arrayMovies, setArrayMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies(page)
    .then((response) => {
      setArrayMovies( prev => ([...prev,...response]) );
    })
    
    const onScroll = (event) => {
      if (hasReachedBottom()) {
          setPage(page+1)
        }
    }
    window.addEventListener('scroll', onScroll);       
    return () => window.removeEventListener('scroll', onScroll);
  },[page])


  const hasReachedBottom = () => {        
    const element = document.documentElement || document.body;
    return  (
        element.scrollHeight - element.scrollTop === element.clientHeight
    );
  }

  return (
        <div className="content">
          <div className="header">
            <h1> Listado de Películas </h1>
          </div>
          <div className="movies-list">
            { arrayMovies.map((value, index) => {
              return <MovieBox className="movie-box" id={value.id} title={value.title} image={value.poster_path} year={value.release_date.slice(0,4)}/>
            })
            }
          </div>

        </div>
  );
}

export default Home;
