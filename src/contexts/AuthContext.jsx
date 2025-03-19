import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

const fakeUser = {
    username: "Judith",
    email: "judith29@gmail.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz"
}

const AuthProvider = ({ children }) => {
    const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initialState);
    
    function login(email, password) {
        if (email === fakeUser.email && password === fakeUser.password) {
            dispatch({ type: "LOGIN", payload: fakeUser });
        } else {
            alert("Invalid credentials");
        }
    }

    function logout() {
        dispatch({ type: "LOGOUT" });
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
 }

function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export { AuthProvider, useAuth };