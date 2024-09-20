import {
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { appFireStore } from "../firebase/config";

export const useCollection = (transaction, myQuery) => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState("");
  // 컴포넌트 렌더링이 끝난 후에 firebase에서 데이터를 받고 나머지를 그리기 위해, useEffect를 사용하여 통신
  useEffect(() => {
    // query
    let q;
    if (myQuery) {
      // where: 쿼리문에서의 조건문 (그 중에서~)
      q = query(
        collection(appFireStore, transaction),
        where(...myQuery),
        orderBy("createdTime", "desc")
      );
    }

    // DB구독
    const unsubscribe = onSnapshot(
      myQuery ? q : collection(appFireStore, transaction),
      (snapshot) => {
        const result = [];
        snapshot.docs.forEach((doc) => {
          // doc.data(): 사용자가 작성한 내용
          // doc.id: 삭제시 필요
          result.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(result);

        // onSnapshot 함수의 특징 (firebase 제공) - https://firebase.google.com/docs/firestore/query-data/listen?hl=ko#handle_listen_errors
        // ㄴ try - catch 문 없이도 에러처리를 할 수 있다
      },
      (error) => {
        setError(error.message);
        console.error(error.message);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return { documents, error };
};
