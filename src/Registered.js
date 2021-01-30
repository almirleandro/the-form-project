import React, { useState, useEffect } from 'react';

function Registered(props) {

  const [query, setQuery] = useState('');
  const [movieArray, setMovieArray] = useState([]);
  const [movieList, setMovieList] = useState([])

  const searchMovie = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=53d1ed1dbd54c7022b78b3f3b8a42342&language=pt-BR&query=${query}&page=1&include_adult=false`;
    
    try {
      const res = await fetch(url);
      const data  = await res.json();
      if (data.results) setMovieArray(data.results);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const tempList = movieArray.map(movie => <img key={movie.id} src={'https://image.tmdb.org/t/p/w185' + movie.poster_path} alt='moviePoster'/>);
    setMovieList(tempList);
  }, [movieArray])


  return (
    <div className="Registered">
      {props.profile}
      <h1>Great Movie Search</h1>
      <input className='queryInput' placeholder='Search a movie' onChange={e => setQuery(e.target.value)} />
      <button onClick={() => searchMovie()}>Submit</button>
      <button onClick={() => props.setCanEnter(false)}>magic</button>
      <div className='movieGrid'>
        {movieList}
      </div>
    </div>
  );
}

export default Registered;
