import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../context/'
import { getMovies } from '../../services/movies';
import './index.scss';

function Home() {
    const path = "https://image.tmdb.org/t/p/original";
    const [arrayMovies, setArrayMovies] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        getMovies(page)
        .then((response)=> {
            setArrayMovies( prev => ([...prev,...response]) );
        });
    }, [page]);

    useEffect(() => {
        const onScroll = (event) => {
            if (hasReachedBottom()) {
                setPage((prev) => prev +1 )
            }
        }
        window.addEventListener('scroll', onScroll);       
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const hasReachedBottom = () => {    
          
        const element = document.documentElement || document.body;
        return  (
            /* document.body.offsetHeight + document.body.scrollTop === document.documentElement.scrollHeight */
            element.scrollHeight - element.scrollTop === element.clientHeight
        );

      }
    
    return (
        <div className="content-home">
{/*             <h1> PELICULAS</h1> */}
            <div className="movies-box"> 
                { 
                    arrayMovies.map((value, index) => {
                    return (
                        <div  className="movie-box"> 
                            <img src={path + value.poster_path} />
                            <h3> { value.title } <span> ( { value.release_date.substring(0,4) } )</span> </h3>

                        </div>
                    )
                    })
                }
            </div>
        </div>
  );
}

export default Home;
