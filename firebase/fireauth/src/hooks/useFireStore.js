import { collection } from "firebase/firestore";
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
    default:
      return state;
  }
};

const useFireStore = (transaction) => {
  const [response, dispatch] = useReducer(storeReducer, initState);

  const colRef = collection(appFireStore, transaction);

  const addDocument = (doc) => {};

  const delDocument = (id) => {};

  return { addDocument, delDocument, response };
};
