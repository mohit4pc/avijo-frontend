import React from "react";
import HomeNav from "../../components/Users/navbar/HomeNav";
import SecondNavbar from "../../components/Users/navbar/SecondNavbar";
import SearchSection from "../../components/Users/Ui/SearchSection";

const Home = () => {
  React.useEffect(() => {
    localStorage.setItem("myPath", window.location.pathname);
  }, []);

  return (
    <div>
      {/* <HomeNav /> */}
      <SecondNavbar />
      <div className="bg-EDF4F6">
        <SearchSection />
        
      </div>
    </div>
  );
};

export default Home;
