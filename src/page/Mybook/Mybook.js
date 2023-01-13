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
        <div className="mt-10 w-2/3">
          <MybookList />
        </div>
      </div>
    </>
  );
};

export default Mybook;
