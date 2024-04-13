import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const { nowPlayingMovies } = useSelector((store) => store.movies);
  const { popularMovies } = useSelector((store) => store.movies);
  const { topRatedMovies } = useSelector((store) => store.movies);
  const { upcomingMovies } = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-80  relative z-10">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
