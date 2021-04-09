import React from "react";
import styled from "styled-components";

const Main = ({ fontSizeRatio }) => {
  return (
    <Wrapper fontSizeRatio={fontSizeRatio}>
      <h1>Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fuga
        consequuntur veritatis, dolorem recusandae unde cum tempora nemo fugit
        officia animi natus ea ratione iusto sit placeat ab vitae non.
      </p>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  background: #555555;

  padding: 2em 5em;

  & h1 {
    color: white;
    font-size: ${(props) => 1.7 * props.fontSizeRatio}em;
  }

  & p {
    color: white;
    font-size: ${(props) => 1.5 * props.fontSizeRatio}em;
  }
`;
