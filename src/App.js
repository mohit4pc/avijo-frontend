import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Users/Login";
import UserHeader from "./components/Users/header/Header";
import "./styles/index.css";
import CreateAccount from "./Pages/Users/CreateAccount";
import HomeNavbar from "./components/Users/navbar/HomeNav";
import Home from "./Pages/Users/Home";
import UserLoginOtp from "./components/Users/Ui/UserLoginOtp";
import DoctorLogin from "./Pages/Doctor/Login";
import ProfileEdit from "./Pages/Doctor/ProfileEdit";
import Profile from "./Pages/Doctor/Profile";
import OtpVerify from "./Pages/Doctor/OtpVerify";
import ProfileNavbar from "./components/Doctors/DoctorsProfile/ProfileNavbar";
import ProfileEditNav from "./components/Doctors/DoctorEditProfile/ProfileEditNav";
import PharmacyLogin from "./Pages/Pharmacy/Login";
import PharmacyProfileEdit from "./Pages/Pharmacy/ProfileEdit";
import PharmacyProfile from "./Pages/Pharmacy/Profile";
import PharmacyOtpVerify from "./Pages/Pharmacy/OtpVerify";
import PharmacyProfileNavbar from "./components/Pharmacy/PharmacyProfile/ProfileNavbar";
import PharmacyProfileEditNav from "./components/Pharmacy/PharmacyEditProfile/ProfileEditNav";
import LabLogin from "./Pages/Lab/Login";
import LabProfileEdit from "./Pages/Lab/ProfileEdit";
import LabProfile from "./Pages/Lab/Profile";
import LabOtpVerify from "./Pages/Lab/OtpVerify";
import LabProfileNavbar from "./components/Lab/LabProfile/ProfileNavbar";
import LabProfileEditNav from "./components/Lab/LabEditProfile/ProfileEditNav";
import MainHome from "./Pages/Home";
import HomeNav from "./components/Users/navbar/HomeNav";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("myPath", location.pathname);
  }, [location.pathname]);

  const currentPath = location.pathname;

  const showProfileNavbar = currentPath === "/doctor/profile";
  const showProfileEditNavbar = currentPath === "/doctor/edit-profile";
  const showLabProfileEditNavbar = currentPath === "/lab/edit-profile";
  const showUserHome = currentPath === "/user/home";
  const showPharmacyProfileEditNavbar =
    currentPath === "/pharmacy/edit-profile";
  const showHeader = currentPath.startsWith("/user") && !showUserHome;
  const showNavbar = !(
    showProfileNavbar ||
    showProfileEditNavbar ||
    showLabProfileEditNavbar ||
    showPharmacyProfileEditNavbar ||
    showUserHome ||
    [
      "/doctor/login",
      "/doctor/otp-verify",
      "/pharmacy/login",
      "/pharmacy/otp-verify",
      "/lab/login",
      "/lab/otp-verify",
      "/",
    ].includes(currentPath)
  );

  return (
    <>
      {showProfileNavbar && <ProfileNavbar />}
      {showHeader && <UserHeader />}
      {showUserHome && <HomeNav />}
      {showNavbar && <HomeNavbar />}
      {showProfileEditNavbar && <ProfileEditNav />}
      {showPharmacyProfileEditNavbar && <PharmacyProfileEditNav />}
      {showLabProfileEditNavbar && <LabProfileEditNav />}
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/user/home" element={<Home />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/otp-verify" element={<UserLoginOtp />} />
        <Route path="/user/create-account" element={<CreateAccount />} />
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/doctor/profile" element={<Profile />} />
        <Route path="/doctor/edit-profile" element={<ProfileEdit />} />
        <Route path="/doctor/otp-verify" element={<OtpVerify />} />

        <Route path="/pharmacy/login" element={<PharmacyLogin />} />
        <Route path="/pharmacy/profile" element={<PharmacyProfile />} />
        <Route
          path="/pharmacy/edit-profile"
          element={<PharmacyProfileEdit />}
        />
        <Route path="/pharmacy/otp-verify" element={<PharmacyOtpVerify />} />

        <Route path="/lab/login" element={<LabLogin />} />
        <Route path="/lab/profile" element={<LabProfile />} />
        <Route path="/lab/edit-profile" element={<LabProfileEdit />} />
        <Route path="/lab/otp-verify" element={<LabOtpVerify />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
