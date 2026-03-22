import { useContext } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

// set children as props so that it can be returned
const PrivateRoutes = ({ children }) => {
  // receive user using useContext
  // check whether user exists or not , if not navigate to login page
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
