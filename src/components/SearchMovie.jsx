import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";

const SearchMovie = () => {
  const [movieInfo, setMovieInfo] = useState([]);

  const { movieName } = useParams();

  const fetchSearchMovieInfo = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movieName,
      API_OPTIONS
    );
    const data = await response.json();
    console.log(data.results);

    setMovieInfo(data.results);
  };

  useEffect(() => {
    fetchSearchMovieInfo();
  }, []);

  if (!movieInfo) return;

  return (
    <div className="flex flex-wrap gap-10 justify-around">
      {movieInfo.map(({ poster_path }) => {
        return <MovieCard posterPath={poster_path} />;
      })}
    </div>
  );
};

export default SearchMovie;
