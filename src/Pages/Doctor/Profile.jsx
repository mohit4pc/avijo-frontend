import React from "react";
import ProfileNavbar from "../../components/Doctors/DoctorsProfile/ProfileNavbar";
import ProfileHero from "../../components/Doctors/DoctorsProfile/ProfileHero";

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
