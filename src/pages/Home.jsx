import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const moviesUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

function Home() {
  const [topMovies, setTopMovies] = useState([]);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  }

  useEffect(() => {
    const moviesUrlData = `${moviesUrl}top_rated?${apiKey}`;
    getMovies(moviesUrlData);
  }, []);

  return (
    <>
      <div className='container'>
        <h2 className='my-4'>Melhores Filmes:</h2>
        <div className='row'>
          {topMovies && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} showLink={true} />)}
        </div>
      </div>
    </>
  )
}

export default Home
