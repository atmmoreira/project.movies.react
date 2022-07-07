import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const apiKey = process.env.REACT_APP_API_KEY;
const searchUrl = process.env.REACT_APP_API_SEARCH;

function Search() {
  const [searchParamns] = useSearchParams();
  const query = searchParamns.get("q");
  const [movies, setMovies] = useState([]);

  const getSearchMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  }

  useEffect(() => {
    const searchResultQuery = `${searchUrl}?${apiKey}&query=${query}`;
    getSearchMovie(searchResultQuery);
  }, [query]);

  return (
    <>
      <div className='container'>
        <h2 className='my-4'>Resultado: {query}</h2>
        <div className='row'>
          {movies && movies.map((movie) => <MovieCard key={movie.id} movie={movie} showLink={true} />)}
        </div>
      </div>
    </>
  )
}

export default Search
