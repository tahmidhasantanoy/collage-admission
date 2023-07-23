import React from "react";
import logo from "../../../public/images/icons/education.png";
import { Link, NavLink } from "react-router-dom";
// import "./NavBar.css";

const NavBar = () => {
  const NavMenu = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive ? "text-orange-600" : isPending ? "" : ""
          }
        >
          <Link to={"/"}>Home</Link>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/collages"}
          className={({ isActive, isPending }) =>
            isActive ? "text-orange-600" : ""
          }
        >
          <Link to={"/collages"}>Collage</Link>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/admission"}
          className={({ isActive, isPending }) =>
            isActive ? "text-orange-600" : isPending ? "" : ""
          }
        >
          <Link to={"/admission"}>Admission</Link>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/mycollage"}
          className={({ isActive, isPending }) =>
            isActive ? "text-orange-600" : isPending ? "" : ""
          }
        >
          <Link to={"/mycollage"}>My Collage</Link>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavMenu}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavMenu}</ul>
      </div>
      <div className="navbar-end">
        {/* changes  */}
        <div className="flex gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        {/* changes  */}
      </div>
    </div>
  );
};

export default NavBar;
