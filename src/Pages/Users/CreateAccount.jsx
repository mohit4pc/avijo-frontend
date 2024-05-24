import React, { useState, useEffect, useRef } from "react";
import HeroImage from "../../Assets/image/medical.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { BaseUrl } from "../../Routes/BaseUrl";

const CreateAccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDob] = useState("");

  const otpRefs = useRef([]);

  useEffect(() => {
    localStorage.setItem("myPath", window.location.pathname);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mobileNumber = location.state && location.state.mobileNumber;
    if (mobileNumber) {
      setPhone(mobileNumber);
      sendOtp(mobileNumber);
    }
  }, [location.state]);

  const sendOtp = async (mobileNumber) => {
    setLoading(true);
    try {
      const response = await axios.post(`${BaseUrl}/user/register`, {
        mobileNumber,
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error sending OTP:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (value, index) => {
    if (isNaN(value) || value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleVerifyOtp = async () => {
    const otpString = otp.join("");
    try {
      const response = await axios.post(`${BaseUrl}/user/verify`, {
        mobileNumber: phone,
        otp: otpString,
        fullName,
        email,
        dateOfBirth,
      });
      console.log("Verification Response:", response.data);
      Swal.fire("Success", "OTP Verified Successfully", "success");
      navigate("/next-page");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      Swal.fire("Error", "OTP Verification Failed", "error");
    }
  };

  return (
    <section>
      <div className="container pt-2">
        <div className="row bg-white border rounded">
          <div className="col-md-6">
            <img src={HeroImage} alt="Logo" className="hero-w" />
          </div>
          <div className="col-md-6 pt-5 hero_left">
            <h2>Create Account</h2>
            <form>
              <div className="d-flex flex-column">
                <label>Full name</label>
                <input
                  type="text"
                  className="phone-input"
                  placeholder="Enter your Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column">
                <label>EMAIL ID</label>
                <input
                  type="text"
                  className="phone-input"
                  placeholder="Enter your Email Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column">
                <label>Date of birth</label>
                <input
                  type="date"
                  className="phone-input"
                  placeholder="Enter your Date of Birth"
                  value={dateOfBirth}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <label>Verifying number</label>
              {show === true ? (
                <></>
              ) : (
                <>
                  <label className="mb-3 mt-0">
                    We have sent a 6-digit OTP.
                  </label>
                  <div className="d-flex gap-2">
                    {otp.map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        className="otp_input"
                        value={otp[index]}
                        onChange={(e) => handleOtpChange(e.target.value, index)}
                        ref={(el) => (otpRefs.current[index] = el)}
                        maxLength={1}
                      />
                    ))}
                  </div>
                  <label>
                    {seconds > 0
                      ? `Waiting for OTP...${seconds} Sec`
                      : "Time's up!"}
                  </label>
                </>
              )}
            </form>
            <button
              className="mt-2 mb-3"
              onClick={show === false ? () => setShow(!show) : handleVerifyOtp}
              disabled={loading}
            >
              {show === false ? "USE OTP" : "Verify"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
