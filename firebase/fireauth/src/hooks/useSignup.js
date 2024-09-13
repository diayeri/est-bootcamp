import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { appAuth } from "../firebase/config";

export const useSignup = () => {
  // # 에러, 통신상태에 대한 state를 만들자

  // ## 에러상태 관리
  const [error, setError] = useState(null);

  // ## 통신상태 관리
  const [isPending, setIsPending] = useState(false);

  // # 회원가입을 처리할 핵심 함수
  const signup = (email, pw, displayName) => {
    setIsPending(true);

    // 참고: https://firebase.google.com/docs/auth/web/password-auth?hl=ko
    createUserWithEmailAndPassword(appAuth, email, pw)
      .then((userCredential) => {
        // 회원가입을 통해 로그인한 유저의 정보
        const user = userCredential.user;
        console.log(user);
        if (!user) {
          throw new Error("회원가입에 성공했습니다.");
        }

        updateProfile(appAuth.currentUser, { displayName })
          .then(() => {
            // Profile updated! ...
            setIsPending(false);
          })
          .catch((error) => {
            setError(error.message);
            console.error(error);
            setIsPending(false);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setError(error.message);
        console.error(`err code: ${errorCode}, ${error}`);
        setIsPending(false);
      });
  };
};
