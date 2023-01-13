import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Accordion = styled.main.attrs({
  className: "px-10 py-8 bg-gray-100 rounded-lg flex text-lg",
})`
  & {
    .open {
      ${tw`text-gray-600`}
    }
    .close {
      ${tw`text-gray-400`}
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .content {
      ${tw`mb-5`}
    }
    .keyword {
      ${tw`flex space-x-2 text-gray-500 text-sm cursor-pointer`}
    }
    .button {
      ${tw`flex justify-end space-x-5 text-sm`}
    }
  }
`;
const MyCard = (props) => {
  const { content, date, keyword } = props;
  const [target, setTarget] = useState(false);
  console.log("클릭했어요 : ", target);

  return (
    <Accordion onClick={() => setTarget(!target)}>
      <div className={target ? "open" : "close"}>
        <p className={target ? "open content" : "close"}>{content}</p>
        <div className={target ? "open keyword" : "hidden"}>
          {keyword.map((item, index) => (
            <p key={index}>{"#" + item}</p>
          ))}
        </div>
        <div className={target ? "open button" : "hidden"}>
          <p className="">{date + " 작성"}</p>
          <button className="">삭제하기</button>
          <button className="">수정하기</button>
        </div>
      </div>
      <div className="ml-10">
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
    </Accordion>
    // <div
    //   className="px-10 py-8 bg-gray-100 rounded-lg flex"
    //   onClick={() => setTarget(!target)}
    // >
    //   <div className="text-gray-400">
    //     <p className="mb-5">{content}</p>
    //     <div className="flex space-x-2 text-gray-500">
    //       {keyword.map((item, index) => (
    //         <p key={index} className="text-sm cursor-pointer">
    //           {"#" + item}
    //         </p>
    //       ))}
    //     </div>
    //     <div className="flex justify-end space-x-5 text-sm">
    //       <button className="">삭제하기</button>
    //       <button className="">수정하기</button>
    //       <p className="">{date + " 작성"}</p>
    //     </div>
    //   </div>
    //   <div className="">
    //     <svg
    //       viewBox="0 0 20 20"
    //       fill="currentColor"
    //       className="text-gray-600 w-6 h-6"
    //     >
    //       {target ? (
    //         <path
    //           fillRule="evenodd"
    //           d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
    //           clipRule="evenodd"
    //         />
    //       ) : (
    //         <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
    //       )}
    //     </svg>
    //   </div>
    // </div>
  );
};
export default MyCard;
