import { useLocation, useParams } from "react-router-dom";
import React from "react";

const BookInfo = (props) => {
  // console.log(props);
  const { data, state, children } = props; // state = {나의서재 책 detail페이지 : mybook, 책 검색 상세페이지 : search}

  return (
    <>
      <div className="flex gap-x-20">
        <div className="bg-gray-300 w-72 h-80">
          <img src={data.cover} className="w-full h-full" />
        </div>
        <div className="w-4/5">
          {state === "mybook" ? props.children : null}
          <div className="">
            <p className="text-2xl font-semibold mb-1">{data.title}</p>
            <div className="flex items-center gap-x-4 divide-x-2 divide-gray-300 mb-5">
              <p>{data.author}</p>
              <p className="pl-4">드라마/로맨스</p>
              <p className="pl-4">국내소설</p>
              <div className="pl-4 flex items-center">
                <p className="mr-3">평균평점</p>
                <div className="text-yellow-400 flex">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p> 3.4점</p>
                </div>
              </div>
            </div>
            <div className="">{data.description}</div>
            <div className="text-yellow-400 font-semibold text-sm cursor-pointer flex justify-end">
              자세히 보기
            </div>
          </div>
          {state === "search" ? props.children : null}
        </div>
      </div>
    </>
  );
};

export default BookInfo;
