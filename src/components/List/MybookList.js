import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../res/config/fakeData.json";
const MybookList = () => {
  const [targetCtg, setTargetCtg] = useState("전체");

  const category = ["전체", "다 읽은 책", "읽고 있는 책", "찜한 책"];
  return (
    <>
      <div className="flex mb-8 items-end">
        <div className="text-2xl font-bold mr-8">내가 저장한 책</div>
        {category?.map((item, index) => (
          <div
            key={item + index}
            className={
              "text-lg font-semibold mr-4 cursor-pointer " +
              (targetCtg === item
                ? "text-yellow-400 text-bold"
                : "text-gray-400")
            }
            onClick={() => setTargetCtg(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4">
        {Data.item.map((item) => (
          <Link to="detail" key={item.itemId} className="">
            <div className="border bg-gray-100 w-4/5 h-56"></div>
            <div className="w-4/5 mt-2">
              <div className="text-lg line-clamp-1 font-semibold">
                {item.title}
              </div>
              <div className=" line-clamp-1 mb-4">{item.author}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MybookList;
