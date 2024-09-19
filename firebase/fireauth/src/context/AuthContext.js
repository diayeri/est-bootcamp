import { createContext } from "react";

// context
const AuthContext = createContext();

// component
const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider };
