import React, { useEffect } from "react";
import styled from "styled-components";
import walk from "../assets/images/walkemoji.png";

const PageCountBar = (props) => {
  const Box = styled.div`
    height: 10rem;
    background: white;
  `;

  const WalkCount = styled.div`
    color: gray;
    font-weight: bold;
    position: relative;
    top: 30px;
    left: 10px;
  `;

  const Container = styled.div`
    width: 33%;
    height: 1rem;
    background: silver;
    border-radius: 0.7rem;
    position: relative;
    top: 110px;
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
