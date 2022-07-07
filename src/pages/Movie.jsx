import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaMoneyBill } from 'react-icons/fa';

const moviesUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const imgUrl = process.env.REACT_APP_API_IMG;

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  }

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  const getGenres = () => {
    let countries = movie.genres;
    return countries.map(element => element.name);
  }

  useEffect(() => {
    const movieUrl = `${moviesUrl}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, [id]);

  return (
    <>
      {movie &&
        <>
          <div className="card my-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={`${imgUrl}${movie.poster_path}`} className="img-fluid rounded-start" alt={movie.original_title} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{movie.original_title}</h3>
                  <p className="card-text">
                    <small className="text-muted"> <FaStar /> {movie.vote_average} </small> |
                    <small className="text-muted"> <FaMoneyBill /> {formatCurrency(movie.budget)} </small> |
                    <small className="text-muted"> Genres: {getGenres()} </small> |
                  </p>
                  <p className="card-text">{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Movie
