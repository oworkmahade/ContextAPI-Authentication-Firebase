import { NavLink } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const navLink = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>

    <li>
      <NavLink to="/orders">Orders</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </li>

    <li>
      <NavLink to="/register">Register</NavLink>
    </li>
  </>
);

const Navbar = () => {
  // useContext for getting value from AuthContext
  const authInfo = useContext(AuthContext);
  // receive logout and user from AuthContext
  const { logOut, user } = authInfo;

  const handleSignOut = () => {
    logOut()
      .then(() => console.log("log out successful"))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="shadow-sm navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
          >
            {/* li  */}
            {navLink}
          </ul>
        </div>

        <a className="text-xl btn btn-ghost">ContextAPIAuth</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{navLink}</ul>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="w-24 input input-bordered md:w-auto"
        />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://i.ibb.co.com/LdhPKfrb/main-image-hasan.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
          >
            <li>
              <NavLink className="justify-between" to="/profile">
                Profile
                <span className="badge">New</span>
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>

            <li>
              <NavLink to="/login">Login</NavLink>
            </li>

            {user && (
              <li>
                <NavLink onClick={handleSignOut} to="/">
                  Sign out{" "}
                  <span>
                    <MdLogout />
                  </span>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
