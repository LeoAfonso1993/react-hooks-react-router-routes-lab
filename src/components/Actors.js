import React from "react";
import { actors } from "../data";


function Actors() {

  const displayActors = actors.map((actor) => {
        return (
          <div key={actor.name}>
            <h3>{actor.name}</h3>
            <ul>{actor.movies.map((movie) => {
              return <li key={movie}>{movie}</li>
            })}</ul>
          </div>
          )
        
      })
    
  


  return <div>
    <h1>Actors Page</h1>
    <div>{displayActors}</div>
  </div>;
}

export default Actors;
