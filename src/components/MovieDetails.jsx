import React, { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState("");
  const [videoDetails, setVideoDetails] = useState([]);

  const fetchMovieDetails = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/" + id,
      API_OPTIONS
    );
    const data = await res.json();
    console.log(data);
    setMovieDetails(data);
  };

  const fetchVideoDetails = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    const data = await res.json();
    console.log(data);
    setVideoDetails(data.results);
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchVideoDetails();
  }, []);

  if (!movieDetails) return;
  const { title, overview, genres, release_date, poster_path } = movieDetails;
  return (
    <div className="flex w-screen">
      <div className="w-4/12">
        <img src={IMG_CDN_URL + poster_path} alt="" className="" />
      </div>
      <div className="flex flex-col w-8/12">
        <div>
          <h1>Title:{title}</h1>
          <p> Overview: {overview}</p>
          <p> Relase_date: {release_date}</p>

          <ul>
            {genres &&
              genres.map(({ name }) => {
                return <li>Genres Name:{name}</li>;
              })}
          </ul>
          <p> Related Movies</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {videoDetails &&
            videoDetails.map(({ key, name }) => {
              return (
                <div className="w-80 text-center">
                  <iframe
                    className=" aspect-video"
                    src={"https://www.youtube.com/embed/" + key}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                  <p> {name}</p>
                  <p></p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
