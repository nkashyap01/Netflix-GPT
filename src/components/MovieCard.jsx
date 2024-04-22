import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addWatchlistMovies, deleteWatchlistMovies } from "../utils/moviesSlice";

const MovieCard = ({ posterPath, title, release_date,movieId }) => {
  if (!posterPath) return;
  const [watchlist, setWatchlist] = useState(false);
  const dispatch = useDispatch();
  const addToWatchlist = (e) => {
    setWatchlist(true);

    e.preventDefault();
    dispatch(addWatchlistMovies({ posterPath, title, release_date, movieId }));
  };
    const deleteToWatchlist = (e) => {
      setWatchlist(false);
      e.preventDefault();
      dispatch(deleteWatchlistMovies({ title }));
    };

  return (
    <div className="w-[200px] h-[300px] relative">
      <img className="w-full h-full" alt="pic" src={IMG_CDN_URL + posterPath} />
      {watchlist ? (
        <MdFavorite
          className="absolute top-2 right-2 text-3xl text-red-700"
          onClick={deleteToWatchlist}
        />
      ) : (
        <MdFavoriteBorder
          className="absolute top-2 right-2 text-3xl "
          onClick={addToWatchlist}
        />
      )}

      <h1 className="text-red-600">{title}</h1>

      <h1 className="text-red-600">
        {release_date && release_date.substring(0, 4)}
      </h1>
    </div>
  );
};

export default MovieCard;
