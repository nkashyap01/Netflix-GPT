import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const Watchlist = () => {
  const watchlistMovies = useSelector((state) => state.movies.watchlistMovies);
  return (
    <div className="flex flex-wrap gap-5">
      {watchlistMovies &&
        watchlistMovies.map(({ posterPath, title, release_date, movieId }) => {
          return (
            <Link to={`/movieDetails/${movieId}`}>
              <MovieCard
                posterPath={posterPath}
                title={title}
                release_date={release_date}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default Watchlist;
