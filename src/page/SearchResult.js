import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchResult = (props) => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [searchResultData, setSearchResultData] = useState([]);
  const searchWord = location.state;

  useEffect(() => {
    setSearchValue(searchWord); //state에 검색어를 저장
    axios
      .get("fakesearchData.json")
      .then((res) => {
        // console.log(res);
        setSearchResultData(res.data);
        // console.log("searchArra", searchResultData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchWord]); //searchWord 변경될때 랜더링

  //호출한 api를 필러링해서 저장
  const filterSearchResult = searchResultData.filter((item) => {
    return item.title
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });

  return (
    <>
      {/* <div>
        searchWord: {searchWord}, searchValue: {searchValue}
      </div> */}
      <div>
        {/*필터링한 api를 맵핑*/}
        {filterSearchResult.map((item, index) => (
          <div key={index}>
            <img src={item.coverImage} />
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>{item.publisher}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResult;
