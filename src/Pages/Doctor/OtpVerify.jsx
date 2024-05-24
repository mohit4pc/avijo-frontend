import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DoctorLogin from "../../components/Doctors/DoctorLogin/DoctorLogin";
import DoctorOtpVerify from "../../components/Doctors/DoctorOtpVerify/DoctorOtpVerify";
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
            <DoctorLogin />
          </Tab>
          <Tab eventKey="Register" title="Register">
            <DoctorOtpVerify />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default OtpVerify;
