import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const imgUrl = process.env.REACT_APP_API_IMG;

function MovieCard({ movie, showLink = false }) {
  return (
    <>
      <div className='col-md-3 col-6 mb-4'>
        <div className="card">
          <img src={`${imgUrl}${movie.poster_path}`} className="card-img-top" alt={movie.original_title} />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <p className="card-text"><FaStar /> {movie.vote_average}</p>
            {showLink && <Link to={`/movie/${movie.id}`} className="btn btn-sm text-uppercase btn-outline-primary w-100">Details</Link>}
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard
