import React, { useState } from "react";
import { netflixFAQData } from "../data";

import FAQAccrdion from "./FAQAccrdion";

const FAQ = () => {
  return (
    <div className="text-white ">
      {netflixFAQData.map(({ Question, Answer }) => {
        return (
          <div className=" bg-[#2D2D2D] mt-2  text-lg">
            <FAQAccrdion Question={Question} Answer={Answer} />
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
