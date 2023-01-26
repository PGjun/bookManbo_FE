import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

let mybookData;

axios.get('/dummy/my-library-all.json').then((Response)=>{
  mybookData = Response.data;
}).catch((Error)=>{
  console.log(Error);
})


const MybookList = () => {
  const [targetCtg, setTargetCtg] = useState("전체");
  const category = ["전체", "다 읽은 책", "읽고 있는 책", "찜한 책"];

  return (
    <>
      <div className="flex items-end mb-8">
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
      <div className="grid grid-cols-4 gap-5">
        {mybookData.map((item) => (
          <Link to="detail" key={item.isbn} className="">
            <div className="border bg-gray-100 w-48 h-60"></div>
            <div className="w-52 mt-2">
              <div className="text-lg line-clamp-1 font-semibold">
                {item.title}
              </div>
              <div className="text-lg line-clamp-1">{item.author}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MybookList;
