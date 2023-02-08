import React, { useEffect, useState } from "react";
import axios from "axios";

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

  // let mainData;
  const [mainData, setMainData] = useState([]);

  axios
    .get("/dummy/mainData.json")
    .then((Response) => {
      setMainData(Response.data);
    })
    .catch((Error) => {
      console.log(Error);
    });

  const postHandler = (postdata) => {
    console.log("postdata", postdata.isbn, postdata.coverImage);
    axios
      .post("http://localhost:4000/my-library-all", {
        id: postdata.isbn,
        isbn: postdata.isbn,
        coverImage: postdata.coverImage,
        title: postdata.title,
        author: postdata.author,
        category: postdata.category,
        publisher: postdata.publisher,
      })
      .then((response) => {
        console.log("response.data :", response.data);
        alert("추가되었습니다");
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          alert("이미 추가되어있는 책입니다.");
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
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
        {mainData.map((item) => (
          <div key="{item}" className="">
            <div className="border bg-gray-100 w-48 mx-auto h-60"></div>
            <div className="w-48 mt-4 mx-auto">
              <div className="text-lg line-clamp-1 font-semibold">
                {item.title}
              </div>
              <div className="text-lg line-clamp-1">{item.author}</div>
            </div>
            <button type="button" onClick={() => postHandler(item)}>
              추가하기
            </button>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SlideList;
