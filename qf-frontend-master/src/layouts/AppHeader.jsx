import chair from '../assets/img/chair.png';
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import "./appHeader.scss";
import axios from "axios";
import {
  API_IP_2,
  ChangeHeaderNavColorContext,
  LoginContext,
  ProgressBarContext,
  UserContext,
} from "../helper/Context";
import { useCookies } from "react-cookie";
import defaultImg from "../assets/img/defaultpropic.png";
import Ripples from "react-ripples";

const api = axios.create({
  baseURL: `http://${API_IP_2}/`,
});
export default function AppHeader(props) {
  let navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const { user, setUser } = useContext(UserContext);
  const { changeHeaderNavColor, setChangeHeaderNavColor } = useContext(
    ChangeHeaderNavColorContext
  );

  const [searchKey, setSearchKey] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const { progress, setProgress } = useContext(ProgressBarContext);

  const doLogout = () => {
    setCookie("token", "expired", { path: "/" });
    setLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {}, [user]);

  return (
    <>
      <div className={changeHeaderNavColor ? "Header header-scroll" : "Header"}>
        <Link to="" className="react-link">
          <div className="logo">
            <span>Queens <img src={chair} alt="chairLogo" /></span>Furniture
          </div>
        </Link>
        <div className="logo-md">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="What furnitures are you looking for?"
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            onKeyUp={(event) => {
              if (event.key == "Enter") {
                if (searchKey.trim() != "") {
                  navigate(`/fns/search/${searchKey}`, { searchKey });
                } else {
                  setSearchKey(undefined);
                  navigate("/services");
                }
              }
            }}
          />
          <Ripples
            className="riple-btn"
            color="rgba(255,255,255, 0.5)"
            during={1200}
          >
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={() => {
                if (searchKey.trim() != "") {
                  navigate(`/fns/search/${searchKey}`, { searchKey });
                } else {
                  setSearchKey(undefined);
                  navigate("/fns");
                }
              }}
            ></i>
          </Ripples>
        </div>
        <div className="nav-bar">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-nav" : "text-link"
            }
          >
            <nav>Home</nav>
          </NavLink>
          {/* <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "active-nav" : "text-link"
            }
          >
            <nav>Services</nav>
          </NavLink> */}
          {/* <NavLink
            to="/sellers"
            className={({ isActive }) =>
              isActive ? "active-nav" : "text-link"
            }
          >
            <nav>Sellers</nav>
          </NavLink> */}
          {/* <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive ? "active-nav" : "text-link"
            }
          >
            <nav>About</nav>
          </NavLink> */}
        </div>
        <div className="buttons">
          {!loggedIn ? (
            <>
              <Link to="/login">
                <button className="login">Sign in</button>
              </Link>
              <Link to="/signup">
                <button className="signup">Register Now</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/cart">
                <button className="icon">
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </Link>
              <div className="profile-img">
                <img
                  src={
                    user.proPic
                      ? `http://${API_IP_2}/api/${user.proPic}`
                      : defaultImg
                  }
                  alt=""
                />
                <div className="account-hover-list">
                  <div className="title">Welcome back</div>
                  <ul>
                    <Link
                      to={
                        user.userType == "admin" &&
                        user.isAdmin == true
                          ? "/profile/services"
                          : user.userType == "buyer" ||
                            user.userType == "admin"
                          ? "/profile/orders"
                          : "/"
                      }
                      style={{ textDecoration: "none" }}
                      className="react-link"
                    >
                    {user.userType == "admin" &&
                        user.isAdmin == true ? <li>Admin Pannel</li> : <li>My Profile</li>}
                      
                    </Link>
                    <Link className="react-link" to="/cart">
                      {/* <li>My Cart</li> */}
                    </Link>
                    <li>Message Center</li>
                    <li onClick={doLogout}>Log Out</li>
                  </ul>
                </div>
              </div>
              {/* <button className="signup" onClick={doLogout}>
                Logout
              </button> */}
            </>
          )}
        </div>
      </div>
    </>
  );
}
