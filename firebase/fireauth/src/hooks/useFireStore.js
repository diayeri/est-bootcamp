import { addDoc, collection, Timestamp } from "firebase/firestore";
import { appFireStore } from "../firebase/config";
import { useReducer } from "react";

const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const storeReducer = (state, action) => {
  // state에는 현재값, action에는 dispatch로 부터 받은 액션 값
  switch (action.type) {
    case "isPending":
      return {
        document: null,
        isPending: true,
        error: null,
        success: false,
      };
    case "addDoc":
      return {
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };
    case "error":
      return {
        document: null,
        isPending: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export const useFireStore = (transaction) => {
  const [response, dispatch] = useReducer(storeReducer, initState);

  // 컬렉션의 주소
  const colRef = collection(appFireStore, transaction);

  const addDocument = async (doc) => {
    dispatch({ type: "isPending" });

    try {
      const createdTime = Timestamp.fromDate(new Date());
      // docRef: firestore에서 만들어진 문서의 내용
      const docRef = await addDoc(colRef, { ...doc, createdTime });

      dispatch({ type: "addDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
      console.error(error.message);
    }
  };

  const delDocument = (id) => {};

  return { addDocument, delDocument, response };
};
