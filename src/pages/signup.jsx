import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate=useNavigate()
  const [isPassword, setisPassword] = useState(true);
  const [isConfirmPassword, setisConfirmPassword] = useState(true)
  const togglePassword = () => {
    setisPassword(!isPassword);
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 ps-0 d-none d-md-block ">
            <img
              src="./img/signinimg.png"
              alt="Logo"
              className="img-fluid w-100 siginimg"
            />
          </div>
          <div className="col-12 col-md-6 pe-5 ps-5">
            <div className=" mt-5 pb-5">
            <img src="./img/logoblue.png" alt="Logo" className="mb-2" style={{height: 50}} />
            </div>
            <h3 className="mb-4">Sign Up</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Email Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="abc@gmail.com"
                />
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="email" className="form-label">
                  Create Password
                </label>
                <input
                  type={isPassword?"password":"text"}
                  className="form-control"
                  id="email"
                  placeholder="abc@352441#"
                />
                 <span className="pass-eye cursor-pointer pointer-cursor" onClick={togglePassword}>{!isPassword?<i className="bi bi-eye"></i>:<i className="bi bi-eye-slash"></i>}</span>
              </div>
              <div className="mb-3 form-control-position position-relative">
                <label htmlFor="password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type={isConfirmPassword?"password":"text"}
                  className="form-control"
                  id="password"
                  // onChange={()=>setisConfirmPassword(!isConfirmPassword)}
                  placeholder="abc@352441#"
                />
                 <span className="pass-eye cursor-pointer pointer-cursor" onClick={()=>setisConfirmPassword(!isConfirmPassword)}>{!isConfirmPassword?<i className="bi bi-eye"></i>:<i className="bi bi-eye-slash"></i>}</span>
              </div>
              <button type="submit" className="btn btn-custom w-100">
                Sign Up
              </button>
            </form>
            <div className="signin-text mt-4">
              Already have an account? <Link to={"/signin"}>Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
