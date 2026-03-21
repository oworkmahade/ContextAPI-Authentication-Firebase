import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

// createContext named AuthContext and export it
// createContext must need to import from react
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

// create provider with putting the whole  apps as a children by wrapping <RouterProvider router={router} /> with  <AuthProvider></AuthProvider> in main.jsx
// set value named authInfo or anything else changed latter
const AuthProvider = ({ children }) => {
  // state to set user null/active
  const [user, setUser] = useState(null);
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

  // observe auth state change
  // unSubscribe is a variable act as a spy for future disconnection
  // better to declare after userSignIn
  // Get the currently signed-in use

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(
        "Observing current user inside useEffect of AuthProvider",
        currentUser,
      );
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // SignOut
  // user defined function name should be logOut because return authentication function name is signOut to avoid conflict
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    createPasswordBasedAcc,
    userSignIn,
    logOut,
    user,
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
