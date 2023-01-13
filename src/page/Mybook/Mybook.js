import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ShortBookHistory from "../../components/ShortBookHistory";
import PageCountBar from "../../components/PageCountBar ";
const Mybook = (props) => {
  return (
    <>
      <PageCountBar />
      <ShortBookHistory />
      <Link to="detail" className="bg-red-300 w-full h-20">
        이동
      </Link>
    </>
  );
};

export default Mybook;
