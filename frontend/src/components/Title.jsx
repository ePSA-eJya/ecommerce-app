import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      <p className="text-yellow-800 parkinsans-bold">
        {text1}
        <span className="text-yellow-500 font-medium parkinsans-bold">
          {text2}
        </span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
