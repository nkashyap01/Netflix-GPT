import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[13%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold"> {title}</h1>
      <p className="w-1/4 py-6"> {overview}</p>
      <div className="">
        <button className="p-3 px-8  rounded-lg text-black bg-white font-semibold hover:bg-opacity-80 ">
          {" "}
          Play
        </button>
        <button className="mx-2 p-3 px-6 rounded-lg bg-gray-700 bg-opacity-50">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
