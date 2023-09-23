import React from "react";
import { images } from "../Images/images";

function Header() {
  return (
    <header>
      <section className="home-top secondary-bg pt-5 pb-65">
        <div className="container text-center">
          <div className="d-flex align-items-center">
            <div className="top-btns text-end">
              <button className="btn btn-white btn-custom">Login</button>
            </div>
            <img src={images.logoWhite} alt="" className="main-logo" />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
