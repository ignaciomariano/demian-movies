import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { Context } from '../../context/context'
import './index.scss';
import { getMovie, getCast } from '../../services/movies';

function Detail () {
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const path = process.env.REACT_APP_IMG_URL;
  const {
    language,
    setLanguage,
    txt_es,
    txt_pt
  } = useContext(Context);
  
  const { id } = useParams();
  const [txt, setTxt] = useState(txt_es);

  useEffect(() => {
    window.scrollTo(0,0);
    
    getMovie(id, language)
    .then((response) => {
      setMovie(response);
    });

    getCast(id, language)
    .then((response) => {
      setCast(response.slice(0,10));
    });

  },[language])

  const changeLanguage = () => {
    if(language==='es-ES') {
      setLanguage('pt-BR');
      setTxt(txt_pt);
    } else if (language==='pt-BR') {
      setLanguage('es-ES');
      setTxt(txt_es);
    }
  }

  return (
        <div className="movie-content">
          <div className="img-header">
            <img src={path + movie.backdrop_path} />
            
            <div className="button-header">
              <button> <Link to="/"> { txt.BUTTON1 } </Link> </button>
              <button onClick={changeLanguage}> { txt.BUTTON2 }</button>
            </div>

          </div>
          <div className="movie-content-box"> 
            <div className="movie-content-box-left">
              <div className="img-poster">
                <img src={path + movie.poster_path} />
              </div>
            </div>
            <div className="movie-content-box-right">
              <div className="text-content">
                <h2> {movie.title} </h2>
                <p> { movie.overview } </p>

                <div className="genre-cast-release-content">
                  <div className="cast">
                    <p className="p-cast"><span> { txt.CAST }:</span> </p>
                    { cast && cast.length !== 0?
                        cast.map((value, index) => {
                          return (<li> { value.name } </li>);
                        })
                        :
                        <li> { txt.NORESULTS} </li>
                    }
                  </div>
                  
                  <div className="genre-release">
                    <div className="genres">
                      <p><span> {txt.GENDER}: </span></p>
                      { movie.genres && movie.genres.length !== 0?
                          movie.genres.map((value, index) => {
                            return (<li> { value.name } </li>);
                          })
                          :
                          <li> { txt.NORESULTS} </li>
                      }
                    </div>
                    <div className="release">
                      <p> <span> {txt.RELEASE}: </span> </p>
                      { movie.release_date?
                        <li> { movie.release_date }</li>
                          :
                          <li> { txt.NORESULTS} </li>
                      }
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
  );
}

export default Detail;
