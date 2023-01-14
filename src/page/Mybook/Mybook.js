import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ShortBookHistory from "../../components/ShortBookHistory";
import PageCountBar from "../../components/PageCountBar ";
import MybookList from "../../components/List/MybookList";
import MyCalendar from "../../components/MyCalendar";
import GenreList from "../../components/GenreList";

const Mybook = (props) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex">
          <div className="flex-auto">
            <PageCountBar />
            <ShortBookHistory />
          </div>
          <div className="flex-auto">
            <MyCalendar />
            <GenreList />
          </div>
        </div>
        <div className="w-2/3">
          <MybookList />
        </div>
      </div>
    </>
  );
};

export default Mybook;
