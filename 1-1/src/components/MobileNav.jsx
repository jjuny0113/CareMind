import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const MobileNav = ({ fontSizeRatio }) => {
  const [isVisible, setIsVisible] = useState(false);

  const myFunction = () => {
    setIsVisible(!isVisible);
  };

  const isMobile = useMediaQuery({
    query: "(max-width:768px) ",
  });

  return (
    <>
      {isMobile && (
        <Wrapper fontSizeRatio={fontSizeRatio}>
          <a href="#home" className="active">
            Logo
          </a>
          {isVisible ? (
            <>
              <div id="myLinks">
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
              </div>
            </>
          ) : null}

          <a href="#hamberger" className="icon" onClick={myFunction}>
            <GiHamburgerMenu />
          </a>
        </Wrapper>
      )}
    </>
  );
};

export default MobileNav;

const Wrapper = styled.div`
  overflow: hidden;
  background-color: #333;
  position: relative;
  font-size: ${(props) => 17 * props.fontSizeRatio}px;

  & a {
    color: white;
    padding: 14px 16px;
    text-decoration: none;

    display: block;
  }

  & a.icon {
    background: black;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
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
