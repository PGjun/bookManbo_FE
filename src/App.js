import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./layout/Layout";
import Main from "./page/Main";
import Mybook from "./page/Mybook/Mybook";
import Detail from "./page/Mybook/Detail";
import Bookmark from "./page/Bookmark";
import SignFormLayout from "./layout/SignFormLayout";
import UserJoin from "./page/UserJoin";
import UserLogin from "./page/UserLogin";
import SearchResult from "./page/SearchResult";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route exact element={<Layout />}>
            <Route index path="/" element={<Main title="메인메뉴" />} />
            <Route path="/mybook" element={<Mybook title="나의 서재" />} />
            <Route
              path="/mybook/detail"
              element={<Detail title="나의 서재세부" />}
            />
            <Route path="/bookmark" element={<Bookmark title="책갈피" />} />
            <Route
              path="/searchresult"
              element={<SearchResult title="검색결과" />}
            />

            {/* /parant/child형태로 들어감 */}
            {/* <Route path="parant/*" element={<Parant title="부모 메뉴" />}>
            <Route path="child" element={<Child title="자식 메뉴" />} />
          </Route> */}
            <Route path="/login" element={<UserLogin title="책갈피" />} />
            <Route path="/join" element={<UserJoin title="책갈피" />} />
          </Route>
          {/* <Route exact element={<SignFormLayout />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
