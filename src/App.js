import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./layout/Layout";
import Main from "./page/Main/Main";
function App() {
  return (
    <>
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Main title="메인메뉴" />} />
          {/* /parant/child형태로 들어감 */}
          {/* <Route path="parant/*" element={<Parant title="부모 메뉴" />}>
            <Route path="child" element={<Child title="자식 메뉴" />} />
          </Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
