import { createContext, useReducer } from "react";

// context
const AuthContext = createContext();

// dispatch를 통해 호출할 reducer 함수
const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// component
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  return (
    // 보통 상태값은 전개구문으로 복사하여 전달
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
