import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../firebase/config";

export const useLogin = () => {
  // ## 에러상태 관리
  const [error, setError] = useState(null);

  // ## 통신상태 관리
  const [isPending, setIsPending] = useState(false);

  // ## 전역 context에서 dispatch 함수 받아오기
  const { dispatch } = useAuthContext();

  const login = (email, pw) => {
    setIsPending(true);

    signInWithEmailAndPassword(appAuth, email, pw)
      .then((userCredential) => {
        // sign in
        const user = userCredential.user;
        dispatch({ type: "login", payload: user });
        setIsPending(false);
        console.log("login 성공");
      })
      .catch((error) => {
        setError(error.message);
        console.error(error.message);
        setIsPending(true);
      });
  };

  return [login, isPending, error];
};
