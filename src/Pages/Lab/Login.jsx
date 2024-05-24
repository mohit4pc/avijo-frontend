import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LabLogin from "../../components/Lab/LabLogin/LabLogin";
import LabRegister from "../../components/Lab/LabRegister/LabRegister";

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
            <LabLogin />
          </Tab>
          <Tab eventKey="Register" title="Register">
            <LabRegister />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Login;
