import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ShortBookHistory from "../../components/ShortBookHistory";
import PageCountBar from "../../components/PageCountBar ";
import MybookList from "../../components/List/MybookList";
const Mybook = (props) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <PageCountBar />
        <ShortBookHistory />
        <MybookList />
        <Link to="detail" className="bg-red-300 w-full h-20">
          이동
        </Link>
      </div>
    </>
  );
};

export default Mybook;
