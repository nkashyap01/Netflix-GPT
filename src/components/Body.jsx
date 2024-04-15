import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchMovie from "./SearchMovie";

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
    <div>
      {/* <RouterProvider  router={appRouter} />  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/search/:movieName" element={<SearchMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Body;
