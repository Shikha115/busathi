import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Register() {
  const [type, settype] = useState("password");
  const [showPassword, setshowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePassword = () => {
    type === "password" ? settype("text") : settype("password");
    setshowPassword(!showPassword);
  };
  return (
    <>
      <Header />
      <main>
        <section className="login ptb-50">
          <div className="container">
            <div className="title-section text-center mb-4">
              <h2 className="title fw-bold mb-0">Create Account</h2>
            </div>
            <div className="btns my-4 d-flex align-items-center justify-content-center gap-4 flex-wrap">
              <button className="btn btn-secondary btn-custom">RTO</button>
              <button className="btn btn-secondary btn-custom">
                Bus manager
              </button>
              <button className="btn btn-secondary btn-custom">
                General user
              </button>
            </div>
            <div className="row">
              <div className="col-12 col-md-10 col-lg-6 col-xxl-4 mx-auto">
                <form action="/Account" className="row form">
                  <div className="col-12 mb-4">
                    <label className="mb-0">FIRST NAME</label>
                    <input
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <label className="mb-0">LAST NAME</label>
                    <input
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <label className="mb-0">EMAIL</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <label className="mb-0">PHONE</label>
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      maxLength={10}
                      type="tel"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <label className="mb-0">PASSWORD</label>
                    <div className="search-form">
                      <div className="form-control">
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          type={type}
                          className="border-0 w-100"
                          required
                        />
                        <div
                          className="icon pointer px-3"
                          onClick={handlePassword}
                        >
                          {showPassword ? (
                            <i className="fa-solid fa-eye"></i>
                          ) : (
                            <i className="fa-solid fa-eye-slash"></i>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 text-center pt-1">
                    <Link
                      to="/"
                      type="button"
                      className="btn btn-hover btn-custom btn-primary w-100"
                    >
                      CREATE
                    </Link>
                    <div className="mt-3">
                      <Link to="/Login" className="text-muted btn p-0 fs-6">
                        Login to existing account
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;
