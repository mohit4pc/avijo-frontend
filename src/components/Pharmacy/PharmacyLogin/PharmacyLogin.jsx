import React from "react";
import { Link } from "react-router-dom";

const DoctorLogin = () => {
  return (
    <div className="rounded border">
      <div className="bg-color">
        <h1>Pharmacy</h1>
      </div>
      <div className="row align-content-center">
        <div className="col-md-6 doctor-left">
          <h4>
            Medical/pharma store app to sell online also keep them spontaneous
            with the customer, sales, and order.
          </h4>
          <ul className="custom-list-style">
            <li> Create Shop Profile</li>
            <li>Add/Edit products</li>
            <li>New/Past order view</li>
            <li>Live order Tracking</li>
            <li>Real-time chat with delivery person </li>
            <li>eWallet integration</li>
            <li>Send earnings to the bank</li>
            <li>Check customer reviews</li>
            <li>Detailed insights</li>
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
