import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="">
      <h1 className="m-4 text-red-600 text-xl">{title}</h1>
      <div class="flex overflow-x-auto  hide-scroll">
        <div className="flex  gap-5 h-96">
          {movies.map((movies) => (
            <Link to={"/moviedetails/"+movies.id}>
              {" "}
              <MovieCard
                posterPath={movies.poster_path}
                title={movies.title}
                release_date={movies.release_date} movieId={movies.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
