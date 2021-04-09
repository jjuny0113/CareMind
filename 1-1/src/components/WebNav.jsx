import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const WebNav = ({ fontSizeRatio }) => {
  const isWeb = useMediaQuery({
    query: "(min-width:768px) ",
  });

  return (
    <>
      {isWeb && (
        <Wrapper fontSizeRatio={fontSizeRatio}>
          <a href="#home" className="active">
            Logo
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </Wrapper>
      )}
    </>
  );
};

export default WebNav;

const Wrapper = styled.div`
  overflow: hidden;
  background-color: #333;
  position: relative;
  display: flex;
  font-size: ${(props) => 17 * props.fontSizeRatio}px;

  & a {
    color: white;
    padding: 14px 16px;
    text-decoration: none;
    display: block;
  }

  & a:hover {
    background-color: #ddd;
    color: black;
  }

  .active {
    background-color: #4caf50;
    color: white;
  }
`;
