import React, { useState } from "react";

const MybookList = () => {
  const [targetCtg, setTargetCtg] = useState("전체");

  const category = ["다 읽은 책", "읽고 있는 책", "찜한 책"];
  return (
    <div className="flex mb-8">
      <div className="text-2xl font-bold mr-8">내가 저장한 책</div>
      {category?.map((item, index) => (
        <div
          key={item + index}
          className={
            "text-lg font-semibold mr-4 cursor-pointer " +
            (targetCtg === item ? "text-yellow-400 text-bold" : "text-gray-400")
          }
          onClick={() => setTargetCtg(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default MybookList;
