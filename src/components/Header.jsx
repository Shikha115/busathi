import React, { useEffect, useState } from "react";
import { images } from "../Images/images";
import { Link } from "react-router-dom";

function Header() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));
  return (
    <header>
      <section className="header secondary-bg py-2">
        <div className="container text-center">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/">
              <img src={images.logoWhite} alt="" className="main-logo" />
            </Link>
            <div className="top-btns text-end">
              {isLogin ? (
              // console.log("login - ", isLogin);
                <Link
                  to="/Login"
                  className="btn btn-white btn-custom"
                  onClick={() => {
                    // localStorage.setItem("isLogin", false);
                    console.log("render");
                    localStorage.clear();
                  }}
                >
                  Log Out
                </Link>
              ) : (
                <Link to="/Login" className="btn btn-white btn-custom">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
