import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm/LoginForm";
import Profile from "./Profile/Profile";

const App = () => {
  const { token } = useSelector((state) => state.user);

  return <>{token ? <Profile /> : <LoginForm />}</>;
};

export default App;
