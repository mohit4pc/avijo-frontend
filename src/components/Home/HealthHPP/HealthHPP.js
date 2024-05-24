import React from "react";
import image from "../image/download.jpg";

function HealthHPP() {
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div className="container py-24 mx-auto">
          {/* <h3 className="heading">Health Information HPP Company</h3> */}
          <div className="row">
            {" "}  <div className="col-md-8">
              <div className="health-left-sec ">
                <h3 className="left-heading"> For HPP Company </h3>
                <p className="userApp-para">
                  This app is to manage the medical laboratories system, as it
                  allows users to extract all the required reports from the
                  laboratory and also allows them to follow up on their medical
                  reports.
                </p>
                <div className="health-para">
                  <p> ✔ Add/Edit Lab Profile.</p>
                  <p> ✔ Upcoming Test Booking View.</p>
                  <p> ✔ Upcoming Report Pickup View.</p>
                  <p> ✔ Upload eReport.</p>
                  <p> ✔ eWallet Integration.</p>
                </div>

                <button className="health-btn">
                  Learn More / Register as User
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <img src={image} alt="" className="w-100" />
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
}

export default HealthHPP;
