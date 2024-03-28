import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold"> {title}</h1>
      <p className="w-1/4 py-6"> {overview}</p>
      <div className="">
        <button className="p-3 px-8 text-black rounded-lg bg-gray-700 bg-opacity-50">
          {" "}
          Play
        </button>
        <button className="mx-2 p-3 px-6 text-black rounded-lg bg-gray-700 bg-opacity-50">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
