import React from "react";
import Hero from "../components/Home/Hero/Hero";
import HealthInfo from "../components/Home/HealthInfo/HealthInfo";
import HealthProvider from "../components/Home/HealthProvider/HealthProvider";
import HealthPharmacy from "../components/Home/HealthPharmacy/HealthPharmacy";
import HealthPathology from "../components/Home/HealthPathology/HealthPathology";
import HealthHPP from "../components/Home/HealthHPP/HealthHPP";
import Footer from "../components/Home/footer/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
      <HealthInfo />
      <HealthProvider />
      <HealthPharmacy />
      <HealthPathology />
      <HealthHPP />
      <Footer />
    </div>
  );
};

export default Home;
