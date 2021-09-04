import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

function MovieBox ({id, title, image, year}) {
    const path = "https://image.tmdb.org/t/p/original/";


    return (
        <div className="movie-box">
            <Link to={`detail/${id}`}>
                <h3> { title} ({ year }) </h3>
                <img src={path + image} />
            </Link>
        </div>
    );
}

export default MovieBox;