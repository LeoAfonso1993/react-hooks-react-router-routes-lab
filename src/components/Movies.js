import React from "react";
import { movies } from "../data";


function Movies() {

  const displayMovies = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h4>Title: {movie.title}</h4>
        <h5>Times: {movie.time}</h5>
        <ul>
          Genres: {movie.genres.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    )
  })

  return <div>
    <h1>Movies Page</h1>
    <div>{displayMovies}</div>
  </div>;
}

export default Movies;
