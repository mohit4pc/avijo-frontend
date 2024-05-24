import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LabLogin from "../../components/Lab/LabLogin/LabLogin";
import LabOtpVerify from "../../components/Lab/LabOtpVerify/LabOtpVerify";
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
            <LabLogin />
          </Tab>
          <Tab eventKey="Register" title="Register">
            <LabOtpVerify />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default OtpVerify;
