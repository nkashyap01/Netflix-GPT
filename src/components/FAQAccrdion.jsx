import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
const FAQAccrdion = ({ Question, Answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div>
      <div className="flex justify-between p-4  border-b-2 border-black  ">
        <h1 className="">{Question}</h1>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {showAnswer && <p className="p-4 ">{Answer}</p>}
    </div>
  );
};

export default FAQAccrdion;
