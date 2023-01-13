import React, { useState } from "react";

const MyCard = (props) => {
  const { content, date, keyword } = props;
  const [target, setTarget] = useState(false);
  console.log("클릭했어요 : ", target);
  return (
    <div
      className="px-10 py-8 bg-gray-100 rounded-lg flex"
      onClick={() => setTarget(!target)}
    >
      <div>
        <p>{content}</p>
        <p>{date}</p>
        <p>{keyword}</p>
      </div>
      <div className="">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-600 w-6 h-6"
        >
          {target ? (
            <path
              fillRule="evenodd"
              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
              clipRule="evenodd"
            />
          ) : (
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          )}
        </svg>
      </div>
    </div>
  );
};
export default MyCard;
