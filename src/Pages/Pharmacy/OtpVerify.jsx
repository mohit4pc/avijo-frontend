import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PharmacyLogin from "../../components/Pharmacy/PharmacyLogin/PharmacyLogin";
import PharmacyOtpVerify from "../../components/Pharmacy/PharmacyOtpVerify/PharmacyOtpVerify";
const OtpVerify = () => {
  React.useEffect(() => {
    localStorage.setItem("myPath", window.location.pathname);
  }, []);

  return (
    <div>
      <div className="container">
        <Tabs
          defaultActiveKey="Register"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="Login" title="Login">
            <PharmacyLogin />
          </Tab>
          <Tab eventKey="Register" title="Register">
            <PharmacyOtpVerify />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default OtpVerify;
