import React, { useEffect } from "react";
import styled from "styled-components";
import walk from "../assets/images/walkemoji.png";

const PageCountBar = (props) => {
  useEffect(() => {
    const wdChange = document.getElementById("wdChange");
    let page = 7700;
    //let page = props;
    let wd = page * 0.01;
    //   console.log(`${page}rem`);
    // test.style.background = "gold";
    // test.style.borderRadius = "0.7rem";
    // test.style.height = "1rem";
    wdChange.style.width = `${wd}%`;
  });

  return (
    <>
      <Box>
        <WalkCount>ㅁㅁ님의 현재 걸음 수 </WalkCount>
        <Container>
          <CountBar id="wdChange">
            <BarWalkCount>7700걸음{/*{props}걸음*/}</BarWalkCount>
          </CountBar>
        </Container>
      </Box>
    </>
  );
};

export default PageCountBar;

const Box = styled.div`
  height: auto;
  background: white;
  margin-bottom: 30px;
`;

const WalkCount = styled.div`
  color: gray;
  font-weight: bold;
  font-size: 1.8rem;
  margin: 30px 0 80px 10px;
`;

const Container = styled.div`
  height: 1rem;
  background: silver;
  border-radius: 0.7rem;
`;

const CountBar = styled.div`
  background-color: gold;
  border-radius: 0.7rem;
  height: 1rem;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: -50px;
    right: -25px;
    width: 50px;
    height: 50px;
    background-image: url(${walk});
    background-repeat: no-repeat;
    background-size: 50px 50px;
  }
`;

const BarWalkCount = styled.div`
  position: absolute;
  right: -35px;
  top: -80px;
  color: gold;
  font-weight: bold;
`;