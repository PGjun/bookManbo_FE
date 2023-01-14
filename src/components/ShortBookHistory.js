import React from "react";
import CountMonthChart from "./CountMonthChart";

const ShortBookHistory = (props) => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto w-full h-full">
        <div className="box-border bg-white h-32 p-6 border-2 rounded-2xl my-2 flex">
          <div className="flex-auto w-44">
            <p className="font-bold mb-2 text-xl">1월의 기록 근황</p>
            <div className="font-bold text-sm text-gray-400">
              <p>
                이번 달은 <span className="text-gray-500">8</span>회의 기록을
                했어요.
              </p>
              <p>
                지난 달보다 <span className="text-gray-500">3</span>권 더
                기록했어요!
              </p>
            </div>
          </div>
          <div className="flex-auto w-32">
            <CountMonthChart />
          </div>
        </div>
        <div className="box-border bg-white h-32 p-6 border-2 rounded-2xl my-2">
          <span>
            <p className="font-bold">지금 읽고 있는 책이에요</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default ShortBookHistory;
