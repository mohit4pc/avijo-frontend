import React from "react";
import ProfileHero from "../../components/Pharmacy/PharmacyProfile/ProfileHero";

const Profile = () => {
  React.useEffect(() => {
    localStorage.setItem("myPath", window.location.pathname);
  }, []);
  return (
    <>
      <ProfileHero />
    </>
  );
};

export default Profile;
