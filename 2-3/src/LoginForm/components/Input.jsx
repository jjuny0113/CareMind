import React from "react";
import styled from "styled-components";

const Input = ({ item, onInputValueChange }) => {
  return (
    <Wrapper>
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

const Wrapper = styled.div``;
