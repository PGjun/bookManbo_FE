import React from "react";
import styled from "styled-components";
import MyCard from "../components/MyCard";

const Bookmark = () => {
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

  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-20 px-20">
        <div className="text-2xl font-semibold text-yellow-200">책갈피</div>
        <div className="box-border bg-white h-32 p-6 border-2 rounded-2xl my-2 flex"></div>
        <div className="flex gap-x-20">
          <div>
            <div className="bg-gray-300 w-44 h-60 my-2" />
            <div className="text-center">{data.title}</div>
          </div>
          <div className="my-2 space-y-5 w-4/5">
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

export default Bookmark;

const Accordion = styled.div``;
