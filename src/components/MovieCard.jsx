import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[200px] h-[300px]">
      <img className="w-full h-full" alt="pic" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
