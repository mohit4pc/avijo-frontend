import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DoctorLogin from "../../components/Doctors/DoctorLogin/DoctorLogin";
import DoctorRegister from "../../components/Doctors/DoctorRegister/DoctorRegister";

function Login() {
  React.useEffect(() => {
    localStorage.setItem("myPath", window.location.pathname);
  }, []);

  return (
    <>
      <div className="container">
        <Tabs
          defaultActiveKey="Login"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="Login" title="Login">
            <DoctorLogin />
          </Tab>
          <Tab eventKey="Register" title="Register">
            <DoctorRegister />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Login;
