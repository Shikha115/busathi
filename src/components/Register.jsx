import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Register() {
  const [type, settype] = useState("password");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setusers] = useState([
    {
      tab: 1,
      name: "General user",
      active: true,
    },
    {
      tab: 2,
      name: "RTO",
      active: false,
    },
    {
      tab: 3,
      name: "Bus manager",
      active: false,
    },
  ]);
  const [currentUser, setCurrentUser] = useState(1);

  const handleUser = (tab, index) => {
    setCurrentUser(tab);
    const activeUser = users.map((item, i) => {
      if (i === index) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  };

  const handlePassword = () => {
    type === "password" ? settype("text") : settype("password");
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
              {users.map((item, i) => {
                return (
                  <button
                    key={i}
                    className={`btn ${
                      item.active ? "btn-primary" : "btn-secondary"
                    } btn-custom`}
                    onClick={() => handleUser(item.tab, i)}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <div className="row">
              <div className="col-12 col-md-10 col-lg-6 col-xxl-4 mx-auto">
                <form action="/Account" className="row form">
                  {currentUser === 1 ? (
                    <>
                      <div className="col-12 mb-4">
                        <label className="mb-0">FULL NAME</label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          type="text"
                          className="form-control"
                          required
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
                          type="number"
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
                              {type === "password" ? (
                                <i className="fa-solid fa-eye"></i>
                              ) : (
                                <i className="fa-solid fa-eye-slash"></i>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : currentUser === 2 ? (
                    <>
                      <div className="col-12 mb-4">
                        <label className="mb-0">FULL NAME</label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          type="text"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <label className="mb-0">Position</label>
                        <input type="text" className="form-control" required />
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
                          type="number"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <label className="mb-0">RTO License Number</label>
                        <input
                          type="number"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <label className="mb-0">Region or Jurisdiction</label>
                        <input type="text" className="form-control" required />
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
                              {type === "password" ? (
                                <i className="fa-solid fa-eye"></i>
                              ) : (
                                <i className="fa-solid fa-eye-slash"></i>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : currentUser === 3 ? (
                    <>
                      <div className="col-12 mb-4">
                        <label className="mb-0">FULL NAME</label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          type="text"
                          className="form-control"
                          required
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
                          type="number"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <label className="mb-0">Bus Operator Company</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="col-12 mb-4">
                        <label className="mb-0">Position</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="col-12 mb-4">
                        <label className="mb-0">
                          Bus Operator License Number
                        </label>
                        <input
                          type="number"
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
                              {type === "password" ? (
                                <i className="fa-solid fa-eye"></i>
                              ) : (
                                <i className="fa-solid fa-eye-slash"></i>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p>No User</p>
                  )}
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
