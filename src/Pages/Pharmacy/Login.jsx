import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PharmacyLogin from "../../components/Pharmacy/PharmacyLogin/PharmacyLogin";
import PharmacyRegister from "../../components/Pharmacy/PharmacyRegister/PharmacyRegister";

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
            <PharmacyLogin />
          </Tab>
          <Tab eventKey="Register" title="Register">
            <PharmacyRegister />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Login;
