import { createContext, useState } from "react";
import "./style.css";

const SearchResult = (props) => {
  const handleSelectedMovie = async () => {
    const fetchDetails = async (url) =>{
        const dataResponse = await fetch(url, {
          method: 'GET'
        })
        const dataJson = await dataResponse.json();
        window.selectedMovieTitle = dataJson.title
        window.selectedMovieDescription = dataJson.overview
        window.selectedMovieId = dataJson.id
        window.selectedMovieReleaseDate = dataJson.release_date
      }
    fetchDetails(`https://api.themoviedb.org/3/movie/${props.id}?api_key=ecfc4f2c404a65285db2275752af4018&language=pt-BR`)
  }

  return (
    <div>
        <button className= "movie-selected-from-search" onClick={handleSelectedMovie}> {props.titulo}</button>
    </div>
  );
};

export default SearchResult;
