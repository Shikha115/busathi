import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ForgetPasword() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    const [Password, setPassword] = useState('')
    const [showPassword, setshowPassword] = useState(false);
    const [type, settype] = useState("password");
    const handlePassword = () => {
        type === "password" ? settype("text") : settype("password");
        setshowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post(`http://localhost:4000/${token}`,{Password})
        if (res) {
            setPassword('')
            toast.success("Password reset succesfully")
        } else {
            toast.error('! Token expired Generate new link')
        }
    }
    useEffect(() => {
    }, [])
    return (

        <main className="border-top">
            <section className="login ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 col-lg-6 col-xxl-4 mx-auto">
                            <div className="title-section text-center mb-4">
                                <h1 className="heading heading-decor mb-0">
                                    Reset your password
                                </h1>
                            </div>
                            <form onSubmit={handleSubmit} className="row form">
                                <div className="col-12 mb-4">
                                    <label className="mb-0">PASSWORD</label>
                                    <div className="form-control">
                                    <input
                                        type={type}
                                        className="form-control"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={Password}
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
