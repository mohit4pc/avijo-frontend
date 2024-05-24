import React from "react";

const DoctorOtpVerify = () => {
  return (
    <section>
      <div className="container border py-3">
        <div className="row justify-content-center">
          <form className="width-50 border form-doctor-right  form-register">
            <h3>Two Step Verification</h3>{" "}
            <span className="mt-3">Verify Email address </span>
            <p className="my-3">
              To Verify your Email, We sent you a code on your email address.
            </p>
            <div>
              <div className="d-flex flex-column mb-3">
                <label>Enter Email OTP</label>
                <input type="text" placeholder="Enter OTP"></input>
              </div>
              <span className="mt-3">Verify Mobile Number </span>
              <p className="my-3">
                To Verify your Number, We sent you a sms on your Phone.
              </p>
              <div className="d-flex flex-column">
                <label>Enter Mobile number OTP </label>
                <input type="text" placeholder="Enter OTP"></input>
              </div>
            </div>
            <button type="button">Verify</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DoctorOtpVerify;
