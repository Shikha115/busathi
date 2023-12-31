import React, { useEffect, useState } from "react";
import { images } from "../Images/images";
import { Link } from "react-router-dom";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  const isLogin = localStorage.getItem("token");
  return (
    <header>
      <section className="header">
        {/* ========================================================================== */}
        <div className="bg-dark text-white top-header">
          <div className="container">
            <marquee direction="left" className="flex-1">
              Busathi: Your trusty bus buddy ensuring safe and enjoyable
              travels!
            </marquee>
            <ul>
              <li>
                <Link>
                  <FaHeadphonesAlt />
                  Help
                </Link>
              </li>
              <li>
                {isLogin ? (
                  <a href="/Login" onClick={() => localStorage.clear()}>
                    <FaUser />
                    Log Out
                  </a>
                ) : (
                  <Link to="/Login">
                    <FaUser />
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* ========================================================================== */}

        <Navbar expand="lg">
          <div className="container">
            <Link className="navbar-brand p-0" to="/">
              <img src={images.logo} alt="" className="main-logo" />
              {/* <video
                autoplay
                loop
                muted
                className="video-logo"
              >
                 <source src={images.logo_gif} type="video/mp4" />
              </video> */}
            </Link>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/About">
                    About Us
                  </Link>
                  <Link className="nav-link" to="/Safety-Feature">
                    Safety Features
                  </Link>
                  <Link className="nav-link" to="/Search-Bus">
                    Book
                  </Link>
                  {/* <Link className="nav-link" to="/">
                    Contact
                  </Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>

        {/* ========================================================================== */}
      </section>
    </header>
  );
}

export default Header;
