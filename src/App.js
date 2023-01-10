import styled from "styled-components";
import tw from "twin.macro";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const Test = styled.main.attrs({
    className: "my-20 p-4 w-96 border bg-blue-500",
  })`
    & {
      .test {
        ${tw`bg-pink-500`}
      }
      span {
        ${tw`bg-white`}
      }
    }
  `;
  return (
    <div className="">
      <Test>
        <div></div>
      </Test>
      <Routes></Routes>
    </div>
  );
}

export default App;
