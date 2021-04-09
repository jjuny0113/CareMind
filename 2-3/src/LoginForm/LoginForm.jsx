import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { LOG_IN_REQUEST, GET_USER_INFO_REQUEST } from "../redux/reducer/user";
import Input from "./components/Input";
import styled from "styled-components";

const LoginForm = ({ history }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const inputValues = [
    {
      id: "id",
      value: id,
      placeholder: "아이디를 입력해주세요",
      type: null,
    },
    {
      id: "password",
      value: password,
      placeholder: "비밀번호를 입력해 주세요",
      type: "password",
    },
  ];

  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target;
    if (id === "id") {
      setId(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  }, []);

  const handleUserInfoSubmit = () => {
    dispatch({
      type: LOG_IN_REQUEST,
    });
  };

  return (
    <Form onSubmit={handleUserInfoSubmit}>
      {inputValues.map((item) => (
        <Input
          key={item.id}
          item={item}
          onInputValueChange={handleInputChange}
        />
      ))}
      <button>로그인</button>
    </Form>
  );
};

export default LoginForm;

const Form = styled.form`
  width: 25em;
  height: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30vh auto;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.57);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.57);

  & button {
    width: 17em;
    height: 3em;
    border: none;
    border-radius: 10px;
    margin-top: 10px;
    color: white;
    outline: none;
    background: #fc6885;
  }
`;
