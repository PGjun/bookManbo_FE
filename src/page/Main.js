import React, { useEffect } from "react";
import axios from "axios";
import ShortBookHistory from "../components/ShortBookHistory";
import PageCountBar from "../components/PageCountBar ";
import SlideList from "../components/List/SlideList";
const Main = (props) => {
  //  링크 샘플
  //  http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=[TTBKey]&itemIdType=ISBN&ItemId=[도서의ISBN]&output=xml&Version=20131101&OptResult=ebookList,usedList,reviewList

  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-20 px-20">
        <div className="grid grid-cols-3 h-96">
          <div className="text-2xl font-semibold text-gray-600 my-auto space-y-3">
            <p>안녕하세요 ㅇㅇ님</p>
            <p>지금까지 1000페이지를 읽었어요</p>
            <p>앞으로도 응원합니다</p>
          </div>
          <div className="col-span-2 rounded-lg bg-gray-100 w-full" />
        </div>
        {/* List Zone */}
        <div className="my-36 space-y-40">
          <div>
            <SlideList title={"좋아하는 책과 비슷해요"} slide={5} />
          </div>
          <div>
            <SlideList
              title={"베스트셀러에요"}
              category={["전체", "국내도서", "외국도서"]}
              slide={5}
            />
          </div>
          <div>
            <SlideList
              title={"주목받는 신간"}
              category={["전체", "국내도서", "외국도서"]}
              slide={5}
            />
          </div>
          <div>
            <SlideList
              title={"오늘의 추천 도서"}
              category={["전체", "국내도서", "외국도서"]}
              slide={5}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
