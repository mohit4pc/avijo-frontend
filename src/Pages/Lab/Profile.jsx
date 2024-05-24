import React from "react";
import ProfileHero from "../../components/Lab/LabProfile/ProfileNavbar";

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
