import React, { useEffect } from "react";
import axios from "axios";

// const config = {
//   api_key: "ttbkmimi05281551001",
//   request_url: "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx",
//   sample:
//     "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbkmimi05281551001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101",
// };

// CORS 이슈 proxy 서버로 임시해결.
// https://velog.io/@yunsungyang-omc/React-React-App%EC%97%90%EC%84%9C-CORS-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0
const Test = async (pageCount) => {
  try {
    const { data } = await axios.get(
      "/api" + "http://www.aladin.co.kr/ttb/api/test/ItemList_20131101.js"
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
export default Test;
