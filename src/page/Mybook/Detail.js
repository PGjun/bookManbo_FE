import React, { useState } from "react";
import BookInfo from "../../components/Info/BookInfo";
import MyCard from "../../components/MyCard";

import Modal from "../../components/Modal/Modal";
import ModalPortal from "../../components/Modal/ModalPortal";
const Detail = (props) => {
  // 임시데이터
  const data = {
    title: "높고 푸른 사다리",
    author: "공지영 지음",
    pubDate: "2013-10-28",
    description:
      '공지영 장편소설. 한 젊은 수사의 사랑과 방황을 그린 일종의 성장소설이다. 주인공 요한이 소희를 만나 사랑을 하고, 주변 사람들의 이야기를 들으며, "고통은 왜 있는 것이며, 인간은 왜 존재하는지, 사랑은 무엇인지" 같은 질문을 하면서 성장해나가는 과정을 그리고 있다.',
    isbn: "8984317470",
    isbn13: "9788984317475",
    itemId: 32265050,
    cover:
      "http://image.aladin.co.kr/product/3226/50/coversum/8984317470_3.jpg",
    customerReviewRank: 8,
    bestRank: 4,
    subInfo: {
      ebookList: [],
      usedList: {
        aladinUsed: {
          itemCount: 0,
          minPrice: 0,
          link: "http://www.aladin.co.kr/shop/UsedShop/wuseditemall.aspx?ISBN=8984317470&amp;TabType=2&amp;partner=openAPI",
        },
        userUsed: {
          itemCount: 11,
          minPrice: 8000,
          link: "http://www.aladin.co.kr/shop/UsedShop/wuseditemall.aspx?ISBN=8984317470&amp;TabType=1&amp;partner=openAPI",
        },
      },
    },
  };
  //임시 나의기록 데이터
  const cardData = [
    {
      id: 1,
      content:
        "「뉴욕타임스」가 '북미 최고의 픽션 작가'로 꼽은 캐나다 소설가 앨리스 먼로의 단편집. 총 아홉 편의 소설이 수록되었다. 평생 단편 창작에 몰두해온 작가의 이력답게, 탁월한 플롯 구성과 섬세한 관찰력을 보여주는 단편들. 짧은 이야기 속에 평범한 삶의 복잡한 무늬들이 새겨져 있다. 「타임」지는 2001년 이 소설집을 올해의 책 다섯 권 안에 포함시켰다.",
      date: "2023-01-01",
      keyword: ["키워드1", "키워드2", "키워드3"],
    },
    {
      id: 2,
      content:
        "고등학교의 특별 활동 동아리 '고전부'에 소속되어 있는 학생들이 일상에서 벌어지는 수수께끼를 해결해 나가는 학원 청춘 미스터리 소설. 다양한 장르에 도전하며 발표하는 작품마다 호평을 얻는 작가 요네자와 호노부의 데뷔 소설이자, 애니메이션 [빙과]의 원작 소설이다.",
      date: "2023-02-01",
      keyword: ["키워드2", "키워드3", "키워드4"],
    },
    {
      id: 3,
      content:
        "'맨 부커상', '오 헨리 상' 수상 작가 앨리스 먼로의 소설집. 앨리스 먼로는 장편소설 <소녀와 여성의 삶>을 제외하고는 현재까지 열두 권의 단편집을 출간했는데, 1968년 출간된 <행복한 그림자의 춤>은 캐나다 총독문학상을 수상하며 문단의 화려한 찬사를 받은 앨리스 먼로의 첫 소설집이다. 모두 15편의 단편이 수록되어 있다.",
      date: "2023-02-01",
      keyword: ["키워드1", "키워드2", "키워드3"],
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      {openModal && (
        <ModalPortal>
          <Modal onClose={handleCloseModal}>
            <p className="text-2xl font-semibold mb-1">{data.title}</p>
            <div className="flex items-center gap-x-4 divide-x-2 divide-gray-300 mb-10">
              <p>{data.author}</p>
              <p className="pl-4">드라마/로맨스</p>
              <p className="pl-4">국내소설</p>
            </div>
            {/* keyword zone */}
            <div className="flex gap-x-5 mb-10">
              <p className="py-2 w-1/6">키워드 입력</p>
              <div className="flex flex-col w-5/6 gap-y-3">
                <input
                  placeholder="# 키워드를 입력하세요"
                  className="bg-gray-100 p-2 rounded-lg"
                />
                <div className="flex gap-x-2">
                  <div className="w-fit font-semibold text-yellow-500 bg-yellow-100 px-2 py-1 rounded-full">
                    # 키워드 1
                  </div>
                  <div className="w-fit font-semibold text-yellow-500 bg-yellow-100 px-2 py-1 rounded-full">
                    # 키워드 2
                  </div>
                </div>
              </div>
            </div>
            {/* edit zone */}
            <textarea className="outline-none resize-none w-full h-96 bg-gray-100 rounded-lg p-5" />
            {/* button zone */}
            <div className="flex justify-center gap-x-2 mt-10">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 rounded-lg text-lg bg-yellow-400 text-white font-semibold"
              >
                저장하기
              </button>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 rounded-lg text-lg bg-gray-400 text-white font-semibold"
              >
                취소하기
              </button>
            </div>
          </Modal>
        </ModalPortal>
      )}
      <div className="max-w-screen-xl px-20 mx-auto mt-20">
        <div className="border-b mb-20 pb-20">
          <BookInfo state="mybook" data={data}>
            <div className="flex justify-between">
              <p className="text-yellow-400 font-semibold text-sm mb-4">
                다 읽은 책
              </p>
              <div className="flex gap-x-2 h-fit">
                <button className="px-2 py-1 border rounded-lg text-xs cursor-pointer">
                  서재에서 삭제
                </button>
                <button className="px-2 py-1 border rounded-lg text-xs cursor-pointer">
                  정보수정하기
                </button>
              </div>
            </div>
            <div className="pb-5 mb-5 border-b text-sm">
              <div className="flex gap-x-10 items-center h-fit">
                <div className="flex gap-x-4">
                  <p className="">나의 별점</p>
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
                <div className="flex items-center gap-x-4 h-fit">
                  <p className="">읽은 기간</p>
                  <div className="px-2 py-1 flex justify-between gap-x-2 bg-gray-100 text-gray-600 rounded-lg">
                    <p className="">2023년 01월 01일부터</p>
                    <p className="">2023년 01월 01일까지</p>
                  </div>
                </div>
              </div>
            </div>
          </BookInfo>
        </div>
        <div className="relative">
          <h3 className="text-2xl font-semibold">나의 기록</h3>
          <button
            onClick={handleOpenModal}
            className="absolute right-0 top-0 text-white font-semibold bg-yellow-400 px-5 py-1 rounded-lg"
          >
            기록 추가
          </button>
          <div className="bg-gray-100 py-10 my-5 ">저장한키워드zone</div>
          {/* component zone */}
          <div className="my-2 space-y-5">
            {cardData?.map((item) => (
              <div key={item.id}>
                <MyCard
                  date={item.date}
                  content={item.content}
                  keyword={item.keyword}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
