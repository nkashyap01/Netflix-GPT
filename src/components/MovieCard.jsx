import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title, release_date }) => {
  if (!posterPath) return;

  return (
    <div className="w-[200px] h-[300px]">
      <img className="w-full h-full" alt="pic" src={IMG_CDN_URL + posterPath} />
      <h1 className="text-red-600">{title}</h1>

      <h1 className="text-red-600">{release_date && release_date.substring(0,4)}</h1>
    </div>
  );
};

export default MovieCard;
