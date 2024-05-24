import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const DoctorRegister = () => {
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
        <div className="col-md-6 mt-5">
          <div className="width-75 join-p d-flex align-self-lg-start justify-content-between border pt-3 px-4 ">
            <div>
              <p>Join avijo</p>
            </div>
            <div>
              <span>
                Are you a doctor?
                <Link to="/pharmacy/otp-verify" className="ms-2">
                  Register Here
                </Link>{" "}
              </span>
            </div>
          </div>
          <form className="width-75 border form-doctor-right border-top-0 form-register">
            {" "}
            <div>
              <div className="d-flex flex-column">
                <label>Full Name</label>
                <input type="text" placeholder="Full Name"></input>
              </div>
              <div className="d-flex flex-column">
                <label>Email ID</label>
                <input type="text" placeholder="Enter Email ID"></input>
              </div>
              <div className="d-flex flex-column">
                <label>Create Password</label>
                <input type="password" placeholder="Enter Password"></input>
              </div>
              <div className="d-flex flex-column">
                <label>Mobile No</label>
                <div className="d-flex align-items-end gap-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="link"
                      className="dropdown outline-primary"
                      id="dropdown-basic"
                    >
                      +91(IND)
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">+262</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">+92</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">+1</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <input
                    type="password"
                    className="pass-res"
                    placeholder="Enter Password"
                  ></input>
                </div>
              </div>
              <div>
                <div>
                  <div className="d-flex align-items-center mt-2">
                    <input type="checkbox" />
                    <label>
                      Receive relevent offers and promotional communication from
                      avijo
                    </label>
                  </div>
                </div>
                <label>By signing up. I agree to terms</label>
              </div>
            </div>
            <button type="button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegister;
