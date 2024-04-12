import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="">
      <h1 className="m-4 text-red-600 text-xl">{title}</h1>
      <div class="flex overflow-x-auto  hide-scroll">
        <div className="flex  gap-5">
          {movies.map((movies) => (
            <MovieCard posterPath={movies.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
