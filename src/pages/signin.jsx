import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [signInData, setsignInData] = useState({
    emailId: "",
    password: "",
  });

  const [isPassword, setisPassword] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignInData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const togglePassword = () => {
    setisPassword(!isPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signInData);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 ps-0 d-none d-md-block  ">
            <img
              src="./img/signinimg.png"
              alt="Logo"
              className="img-fluid w-100 siginimg"
            />
          </div>
          <div className="col-12 col-md-6 pe-5 ps-5">
            <div className=" mt-5 pb-5">
              <img
                src="./img/logoblue.png"
                alt="Logo"
                className="mb-2"
                style={{ height: 50 }}
              />
            </div>
            <h3 className="mb-4">Welcome Back!</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Email Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="emailId"
                  placeholder="abc@gmail.com"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="email" className="form-label">
                  Password
                </label>
                <input
                  type={isPassword?"password":"text"}
                  className="form-control"
                  id="email"
                  name="password"
                  onChange={handleChange}
                  placeholder="abc@352441#"
                />
                <span className="pass-eye cursor-pointer pointer-cursor" onClick={togglePassword}>{!isPassword?<i className="bi bi-eye"></i>:<i className="bi bi-eye-slash"></i>}</span>
              </div>

              <button type="submit" className="btn btn-custom w-100">
                Sign In
              </button>
            </form>
            <div className="signin-text mt-4">
              New to Autobreeze? <Link to={"/signup"}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
