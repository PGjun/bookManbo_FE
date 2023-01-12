import React from "react";
import ShortBookHistory from "../../components/ShortBookHistory";
import PageCountBar from "../../components/PageCountBar";

const Main = (props) => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto w-full h-full">테스트</div>
      <PageCountBar />
      <ShortBookHistory />
    </>
  );
};

export default Main;
