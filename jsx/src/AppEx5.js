import React, { useState } from "react";
import SimpleRouter from "./components/ex05/SimpleRouter";

export default function AppEx5() {
  const [userAuth, setUserAuth] = useState();
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    const auth = ["admin", "user", "guest"];
    const randomAuth = auth[Math.floor(Math.random() * 3)];
    setUserAuth(randomAuth);
    setIsLoading(false);
  }, 1000);

  return (
    <>
      <button onClick={() => setUserAuth("admin")}>admin</button>
      <button onClick={() => setUserAuth("user")}>user</button>
      <button onClick={() => setUserAuth("guest")}>guest</button>
      <SimpleRouter userAuth={userAuth} isLoading={isLoading} />
    </>
  );
}
