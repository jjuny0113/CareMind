import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_USER_INFO_REQUEST } from "../redux/reducer/user";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Profile = () => {
  const { getUserInfoDone, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_USER_INFO_REQUEST,
    });

    if (userInfo) {
      window.alert(`반가워요! ${userInfo?.username}님 행복한 하루되세요😍`);
    }
  }, [userInfo?.username]);

  return getUserInfoDone ? (
    <Wrapper>
      <Form>
        <img src={userInfo?.profileImg} alt={userInfo?.username} />
        <p>{userInfo?.username}</p>
      </Form>
    </Wrapper>
  ) : null;
};

export default Profile;

const Wrapper = styled.div`
  margin-top: 100px;
`;

const Form = styled.div`
  width: 400px;
  height: 400px;
  margin: 25vh auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10%;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.57);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.57);

  & img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 20px;
  }
  & p {
    font-size: 2em;
  }
`;
