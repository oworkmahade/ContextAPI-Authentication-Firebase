import { createContext } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

// createContext named AuthContext and export it
// createContext must need to import from react
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

// Create a password-based account
// create a user defined function , return createUserWithEmailAndPassword with parameter auth , email and password will get from caller file/ register
// import { createUserWithEmailAndPassword } from "firebase/auth";

const createPasswordBasedAcc = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Sign in a user with an email address and password
// signInUser
// create a user defined function , return signInWithEmailAndPassword with parameter auth , email and password will get from caller file/ login

const userSignIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// create provider with putting the whole  apps as a children by wrapping <RouterProvider router={router} /> with  <AuthProvider></AuthProvider> in main.jsx
// set value named authInfo or anything else changed latter
const AuthProvider = ({ children }) => {
  const authInfo = {
    createPasswordBasedAcc,
    userSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

// children validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
