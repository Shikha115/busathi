import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function ForgetPasword() {
  const [email, setEmail] = useState("");
  console.log("🚀 ~ file: ResetPassword.jsx:8 ~ ForgetPasword ~ email:", email)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:4000/sendpasswordlink', { Email: email })
      console.log("🚀 ~ file: ResetPassword.jsx:13 ~ handleSubmit ~ res:", res)
      toast.success("Password reset link send succesfully to your Email")
    } catch (error) {
        toast.error('Invalid user')
    }
  }
  return (

    <main className="border-top">
      <section className="login ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-6 col-xxl-4 mx-auto">
              <div className="title-section text-center mb-4">
                <h1 className="heading heading-decor mb-0">
                  Enter Email
                </h1>
              </div>
              <form onSubmit={handleSubmit} className="row form">
                <div className="col-12 mb-4">
                  <label className="mb-0">EMAIL</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-12 text-center pt-1">
                  <button
                    type="submit"
                    className="btn btn-hover btn-custom btn-primary px-4"
                  >
                    SUBMIT
                  </button>
                  <div className="mt-3">
                    <Link to="/Login" className="text-muted btn p-0 fs-6">
                      Cancel
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

export default ForgetPasword;
