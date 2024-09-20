import { onSnapshot, collection } from "firebase/firestore";
import { useEffect } from "react";
import { appFireStore } from "../firebase/config";

export const useCollection = (transaction) => {
  // 컴포넌트 렌더링이 끝난 후에 firebase에서 데이터를 받고 나머지를 그리기 위해, useEffect를 사용하여 통신
  useEffect(() => {
    // DB구독
    const unsubscribe = onSnapshot(
      collection(appFireStore, transaction),
      (snapshot) => {
        console.log(snapshot);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return {};
};
