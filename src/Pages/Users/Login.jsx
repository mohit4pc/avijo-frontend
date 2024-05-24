import React from "react";
import HeroSection from "../../components/Users/Ui/HeroSection";

const Login = () => {
  React.useEffect(() => {
    localStorage.setItem("myPath", window.location.pathname);
  }, []);

  return (
    <>
      <HeroSection />
    </>
  );
};

export default Login;
