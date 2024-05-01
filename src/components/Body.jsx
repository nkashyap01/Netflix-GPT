import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchMovie from "./SearchMovie";
import MovieDetails from "./MovieDetails";
import Watchlist from "./Watchlist";

// import {   RouterProvider,   createBrowserRouter } from 'react-router-dom'

const Body = () => {
  //     const appRouter = createBrowserRouter([{
  //         path:"/",
  //         element:<Login />,
  //     },
  // {
  //     path:"/browse",
  //     element:<Browse/>
  // }]);

  return (
    <div className="">
      {/* <RouterProvider  router={appRouter} />  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/search/:movieName" element={<SearchMovie />} />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Body;
