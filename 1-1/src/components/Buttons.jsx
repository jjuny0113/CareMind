import React from "react";
import styled from "styled-components";

const Buttons = ({ onPlusBtn, onMinusBtn }) => {
  return (
    <Wrapper>
      <button onClick={onPlusBtn}>+</button>
      <button onClick={onMinusBtn}>-</button>
    </Wrapper>
  );
};

export default Buttons;

const Wrapper = styled.div`
  position: fixed;
  right: 30px;
  bottom: 20px;

  & button {
    background-color: #4caf50;
    width: 50px;
    height: 50px;
    display: block;
    outline: none;
  }

  button:nth-child(1) {
    border-radius: 20% 20% 0 0;
  }

  button:nth-child(2) {
    border-radius: 0 0 20% 20%;
  }
`;
