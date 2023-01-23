import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openPop, setOpenPop] = useState(false); //검색창 클릭시(open) 최근검색어, 인기검색어 해시태그 조회
  return (
    <>
      <header className="bg-white border-b py-5 w-full ">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-3">
          <Link
            to="/"
            className="font-dangam flex items-center justify-center text-center text-3xl font-semibold text-yellow-300 bg-yellow-50"
          >
            LOGO
          </Link>
          <div className="flex gap-x-16">
            <Link to="mybook" className="text-lg font-semibold">
              나의 서재
            </Link>
            <Link to="bookmark" className="text-lg font-semibold">
              책갈피
            </Link>
          </div>
          <div
            className="w-2/5 rounded-full px-4 border-2 border-yellow-400 flex items-center justify-between"
            onClick={() => setOpenPop(!openPop)}
          >
            <input
              className="px-3 py-2 w-full outline-none"
              placeholder="검색어를 입력해 주세요"
            />
            <button className="text-yellow-400 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-x-5">
            <Link to="/login" className="font-semibold">
              로그인
            </Link>
            <Link to="/join" className="border border-gray-300 rounded-lg px-3 py-1 font-semibold">
              회원가입
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
