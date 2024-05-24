import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Swal from "sweetalert2";
import axios from "axios";
import { BaseUrl } from "../../../Routes/BaseUrl";

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
    countryCode: "+91(IND)",
  });

  const navigate = useNavigate(); // Corrected useNavigate usage

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountryCodeChange = (code) => {
    setFormData({
      ...formData,
      countryCode: code,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password, mobile, countryCode } = formData;

    const payload = {
      fullName,
      emailId: email,
      password,
      mobileNumber: `${mobile}`,
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/user/doctorCreate`,
        payload
      );
      console.log(response);
      if (response.status === 200) {
        Swal.fire("Success", "Doctor registered successfully!", "success");
        navigate("/doctor/otp-verify", {
          state: { emailId: email, mobileNumber: `${mobile}` },
        }); // Passing state
      } else {
        Swal.fire(
          "Error",
          response.data.message || "Something went wrong!",
          "error"
        );
      }
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.message ||
          "Network error. Please try again later.",
        "error"
      );
    }
  };

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
        <div className="col-md-6 mt-5">
          <div className="width-75 join-p d-flex align-self-lg-start justify-content-between border pt-3 px-4">
            <div>
              <p>Join avijo</p>
            </div>
            <div>
              <span>
                Are you a doctor?
                <Link to="/doctor/otp-verify" className="ms-2">
                  Register Here
                </Link>
              </span>
            </div>
          </div>
          <form
            className="width-75 border form-doctor-right border-top-0 form-register"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="d-flex flex-column">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="d-flex flex-column">
                <label>Email ID</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email ID"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="d-flex flex-column">
                <label>Create Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
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
                      {formData.countryCode}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => handleCountryCodeChange("+262")}
                      >
                        +262
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleCountryCodeChange("+92")}
                      >
                        +92
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleCountryCodeChange("+1")}
                      >
                        +1
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <input
                    type="text"
                    name="mobile"
                    className="pass-res"
                    placeholder="Enter Mobile No."
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center mt-2">
                  <input type="checkbox" />
                  <label>
                    Receive relevant offers and promotional communication from
                    avijo
                  </label>
                </div>
                <label>By signing up, I agree to terms</label>
              </div>
            </div>
            <button type="submit" className="text-white">
              {" "}
              {/* Corrected button */}
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegister;
