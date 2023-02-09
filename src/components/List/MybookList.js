import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MybookList = () => {
  const [targetCtg, setTargetCtg] = useState("전체");
  const category = ["전체", "다 읽은 책", "읽고 있는 책", "찜한 책"];

  const [mybookData, setMybookData] = useState([]);

  //axios 중복 요청 방지
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      // setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "http://localhost:4000/my-library-all"
        );
        if (!isCancelled) {
          setMybookData(response.data);
          console.log("response.data", response.data);
        }
      } catch (error) {
        if (!isCancelled) {
          setError(error);
        }
      }

      // setLoading(false);
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/my-library-all")
  //     .then((Response) => {
  //       setMybookData(Response.data);
  //       console.log("Response.data :", Response.data);
  //       console.log("mybookData :", mybookData);
  //     })
  //     .catch((Error) => {
  //       console.log(Error);
  //     }, []);
  // });

  const deleteHandler = (deletedata) => {
    console.log("deletedata id", deletedata.id);
    axios
      .delete(`http://localhost:4000/my-library-all/${deletedata.id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="flex items-end mb-8">
        <div className="text-2xl font-bold mr-8">내가 저장한 책</div>
        {category?.map((item, index) => (
          <div
            key={item + index}
            className={
              "text-lg font-semibold mr-4 cursor-pointer " +
              (targetCtg === item
                ? "text-yellow-400 text-bold"
                : "text-gray-400")
            }
            onClick={() => setTargetCtg(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-5">
        {mybookData.map((item) => (
          <div>
            <div key={item.id}>
              {/*state로 detail 페이지에 데이터전달 */}
              <Link to="detail" state={item}>
                <div className="border bg-gray-100 w-48 h-60"></div>
              </Link>

              <div className="w-52 mt-2">
                <div className="text-lg line-clamp-1 font-semibold">
                  {item.title}
                </div>
                <div className="text-lg line-clamp-1">{item.author}</div>
              </div>
              <button type="button" onClick={() => deleteHandler(item)}>
                삭제하기
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MybookList;
