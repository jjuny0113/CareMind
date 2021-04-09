import React from "react";
import styled from "styled-components";

const Input = ({ item, onInputValueChange }) => {
  return (
    <Wrapper>
      <p>{item.id}</p>
      <input
        id={item.id}
        value={item.value}
        placeholder={item.placeholder}
        type={item.type}
        onChange={onInputValueChange}
      />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  & p {
    margin: 7px 0;
  }

  & input {
    width: 13em;
    height: 2em;
    padding: 8px;
    font-size: 1em;
    outline: none;
    border: 1px solid #b9b9b9;
    border-radius: 10px;
  }
`;
