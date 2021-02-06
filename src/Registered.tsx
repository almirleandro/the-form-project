import React, { useState, useEffect } from 'react';

function Registered(props: {profile: JSX.Element | undefined, setCanEnter: React.Dispatch<React.SetStateAction<boolean>>}) {

  const [query, setQuery] = useState<string>('');
  const [movieArray, setMovieArray] = useState<any[]>([]);
  const [movieList, setMovieList] = useState<any[]>([])

  const searchMovie = async () => {
    try {
      const res = await fetch('https://shielded-ocean-70515.herokuapp.com/api/search', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
          q: query
        })
      });
      const data  = await res.json();
      if (data) setMovieArray(data);
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
      <div className='movieGrid'>
        {movieList}
      </div>
      <button style={{marginTop: '30px'}} onClick={() => props.setCanEnter(false)}>Sign Out</button>
    </div>
  );
}

export default Registered;
