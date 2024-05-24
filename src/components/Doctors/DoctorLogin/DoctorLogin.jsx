import React from "react";
import { Link } from "react-router-dom";

const DoctorLogin = () => {
  return (
    <div className="rounded border">
      <div className="bg-color">
        <h1>DOCTOR</h1>
      </div>
      <div className="row align-content-center">
        <div className="col-md-6 doctor-left">
          <h4>
            Keep track of your patient's health with this
            <br /> powerful app that makes it easy to communicate with them.
          </h4>
          <ul className="custom-list-style">
            <li>Create professional profile</li>
            <li>Set available timings</li>
            <li>Accept/Reject appointment</li>
            <li>Video consultation</li>
            <li>Real-time chat with patients</li>
            <li>Read patient reviews</li>
            <li>Check customer reviews</li>
            <li>Easy login with OTP verification</li>
            <li>Multi-lingual including RTL</li>
          </ul>
        </div>
        <div className="col-md-6">
          <form className="width-75 border rounded form-doctor-right">
            <div>
              <div className="d-flex flex-column">
                <label>Mobile Number / Email ID</label>
                <input
                  type="text"
                  placeholder="Mobile Number / Email ID"
                ></input>
              </div>
              <div className="d-flex flex-column">
                <label>Password</label>
                <input type="password" placeholder="Enter Password"></input>
              </div>

              <div>
                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <input type="checkbox" />
                    <label>Remember me for 30 days</label>
                  </div>
                  <div>
                    <Link to="/">Forgot password?</Link>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="checkbox" />
                    <label>Login with OTP instead of password.</label>
                  </div>
                </div>
              </div>
            </div>
            <button type="button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
