import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
function Login() {
  const [type, settype] = useState("password");
  const [showPassword, setshowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate()
  const handlePassword = () => {
    type === "password" ? settype("text") : settype("password");
    setshowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await axios.post('http://localhost:4000/users/Login', { email, password })
      localStorage.setItem("token", JSON.stringify(data.data));
      toast.success('Logged In', {
        autoClose: 3000,
        closeOnClick: true,
        onClose: () => { window.location.href = '/dashboard'; }
      });
    } catch (error) {
      toast.error(error.response ? error.response.data.error : error.message)
    }
  };

  return (

    <main>
      <section className="login ptb-50">
        <div className="container">
          <div className="title-section text-center mb-4">
            <h2 className="title fw-bold mb-0">Login</h2>
          </div>
          <div className="row">
            <div className="col-12 col-md-10 col-lg-6 col-xxl-4 mx-auto">
              <form action="POST" onSubmit={handleSubmit} className="row form">
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
                  <div className="d-flex align-items-center justify-content-between mb-0">
                    <label className="w-auto">PASSWORD</label>
                    <Link to="/ForgetPasword" className="text-muted btn p-0">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="search-form">
                    <div className="form-control">
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={type}
                        className="border-0 w-100"
                        required
                      />
                      <div className="icon pointer px-3" onClick={handlePassword}>
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
                  <button type="submit" className="btn btn-hover btn-custom btn-primary w-100">
                    SIGN IN
                  </button>
                  <div className="mt-3">
                    <Link to="/Register" className="text-muted btn p-0 fs-6">
                      Create account
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
