// firebase에서 제공하는 signout 함수를 사용하면됨
// https://firebase.google.com/docs/auth/web/password-auth?hl=ko
import { useState } from "react";
import { signOut } from "firebase/auth";
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  // ## 에러상태 관리
  const [error, setError] = useState(null);

  // ## 통신상태 관리
  const [isPending, setIsPending] = useState(false);

  // ## 전역 context에서 dispatch 함수 받아오기
  const { dispatch } = useAuthContext();

  // # 훅 내부에서 필요시에만 logout을 반환하기 위해 따로 함수로 지정
  const logout = () => {
    setIsPending(true);

    signOut(appAuth)
      .then(() => {
        dispatch({ type: "logout" });
        setIsPending(false);
        console.log("logged out");
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
        console.error(error.message);
      });
  };

  return [logout, error, isPending];
};
