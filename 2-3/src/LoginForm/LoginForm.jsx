import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { LOG_IN_REQUEST, GET_USER_INFO_REQUEST } from "../redux/reducer/user";
import Input from "./components/Input";

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
    <form onSubmit={handleUserInfoSubmit}>
      {inputValues.map((item) => (
        <Input
          key={item.id}
          item={item}
          onInputValueChange={handleInputChange}
        />
      ))}
      <button>로그인</button>
    </form>
  );
};

export default LoginForm;
