import { useState } from "react";
import Homepage from "./components/ex02/Homepage";
import Login from "./components/ex02/Login";
import "./App.css";

const userInfo = {
  userId: "weniv",
  userPw: "0000",
};

function App() {
  const [isLogin, setIsLogin] = useState();
  return isLogin ? <Homepage userInfo={userInfo} /> : <Login />;
}
export default App;
