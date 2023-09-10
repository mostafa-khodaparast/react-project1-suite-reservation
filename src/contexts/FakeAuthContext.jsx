import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  error: ''
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    case "error":
      return { ...state, isAuthenticated: false, error: action.payload }
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "mostafa",
  email: "mostafa.khodaparast1997@gmail.com",
  password: "1234",
  avatar: "../../public/mostafakh.jpg"
};


const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated, error }, dispatch] = useReducer(reducer, initialState);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
    else
      dispatch({type: "error", payload: "It's a fake Auth.Please do not change email & password dude 😉"})

  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
