//Modal.js

import React from "react";
import styled from "styled-components";

const Modal = ({ onClose, children }) => {
  return (
    <div className="bg-black/50 w-screen py-36 h-screen fixed top-0 left-0 right-0 flex justify-center items-center">
      <div className="bg-white overflow-scroll w-3/5 h-full rounded-2xl p-20">
        {children}
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;

//아래는 styled-components를 통한 스타일링

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

const Content = styled.div`
  height: 100%;
  width: 950px;
  margin-top: 70px;
  position: relative;
  overflow: scroll;
  background: #141414;
`;
