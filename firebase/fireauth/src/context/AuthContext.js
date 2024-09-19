import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

// context
const AuthContext = createContext();

// dispatch를 통해 호출할 reducer 함수
const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload };
    case "logout":
      return { ...state, user: null };
    case "authIsReady":
      return { ...state, user: action.payload, isAuthReady: true };
    default:
      return state;
  }
};

// component
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthReady: false,
  });

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: "authIsReady", payload: user });
      }
    });

    // 클린업 함수로 구독을 취소하도록
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    // 보통 상태값은 전개구문으로 복사하여 전달
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
