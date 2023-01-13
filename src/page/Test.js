import React, { useEffect } from "react";
import axios from "axios";

// const config = {
//   api_key: "ttbkmimi05281551001",
//   request_url: "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx",
//   sample:
//     "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbkmimi05281551001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101",
// };

// 주소창에 이것만 치면 되는데 왜 하단에서는 안되는지 몰그ㅖㅆ다.
// https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbkmimi05281551001&Query=강철&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101

// CORS 이슈 proxy 서버로 임시해결.
// https://velog.io/@yunsungyang-omc/React-React-App%EC%97%90%EC%84%9C-CORS-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0
// const Test = async (pageCount) => {
//   try {
//     const { data } = await axios.get(
//       "/api/" +
//         "https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbkmimi05281551001&Query=강풀&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101.js"
//     );
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

const Test = () => {
  useEffect(() => {
    const get = () => {
      const response = fetch(
        "https://cors-anywhere.herokuapp.com/https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbkmimi05281551001&Query=%EA%B5%AC%EB%B3%91%EB%AA%A8&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101.js",
        {
          method: "get",
        }
      );
      // .then((res) => res.json())
      // .then((data) => console.log(data));
      // console.log(response);
      return response;
    };
    get().then((data) => {
      console.log(data);
    });
  }, []);
};
export default Test;
