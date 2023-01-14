//
//
// Slick 슬라이더를 사용한 책 리스트
//
//
import React, { useEffect, useState } from "react";
import Data from "../../res/config/fakeData.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideList = (props) => {
  const { title, category, slide } = props; //제목, 카테고리, 슬라이드 수
  const [targetCtg, setTargetCtg] = useState("전체");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slide ? slide : 5,
    slidesToScroll: 5,
  };

  return (
    <>
      {/* 제목 + 구분 */}
      <div className="flex mb-8">
        <div className="text-2xl font-bold mr-8">{title}</div>
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

      {/* 책 리스트 슬라이더로 출력 */}
      <Slider {...settings}>
        {Data.item.map((item) => (
          <div key={item.itemId} className="">
            <div className="border bg-gray-100 w-52 mx-auto h-64"></div>
            <div className="w-52 mt-4 mx-auto">
              <div className="text-lg line-clamp-1 font-semibold">
                {item.title}
              </div>
              <div className="text-lg line-clamp-1">{item.author}</div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SlideList;
