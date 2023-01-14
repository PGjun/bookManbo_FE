import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "../calendar-css.css";

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());

  const mark = ["15-01-2023", "03-01-2023"];

  return (
    <>
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="box-border bg-whith h-auto p-6 border-2 rounded-2xl my-2 flex">
          <Calendar
            onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
            formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
            value={value}
            minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
            maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
            navigationLabel={null}
            showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
            className="mx-auto w-full text-base"
            tileClassName={({ date, view }) => {
              if (mark.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
                return "highlight";
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default MyCalendar;
