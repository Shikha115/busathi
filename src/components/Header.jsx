import React from "react";
import { images } from "../Images/images";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>

      <section className="header secondary-bg py-2">
        <div className="container text-center">
          <div className="d-flex align-items-center justify-content-between">
            <Link to='/'>
            <img src={images.logoWhite} alt="" className="main-logo" />
            </Link>
            <div className="top-btns text-end">
            <Link to='/Login' className="btn btn-white btn-custom">Login</Link>
            </div>
          </div>
        </div>
      </section>

    </header>
  );
}

export default Header;
