// src/ProfileEdit.js
import React from "react";

const ProfileEdit = () => {
  return (
    <>
      <section className="profile-edit navbar-shadow py-4">
        <div className="container mt-3">
          <div className="d-sm-block d-md-flex align-items-center gap-5">
            <div className="text-center">
              <div>
                <label>Profile photo</label>
              </div>
              <div>
                <img
                  src={require("../../Assets/image/Frame 2609503.png")}
                  alt=""
                ></img>
              </div>
              <div className="mt-2">
                <button className="rounded">Upload Photo</button>
              </div>
            </div>
            <div className="d-flex flex-column">
              <label>FULL NAME</label>
              <input type="text" placeholder="Adi Taygi"></input>
            </div>
          </div>
        </div>
      </section>
      <section className="profile-edit navbar-shadow py-4">
        <div className="container mt-3">
          <div className="">
            <div className="basic">
              <h5>Basic Details</h5>
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <label className="mb-2">Title</label>
                    <input type="text" placeholder="Enter your title"></input>
                  </div>
                  <div>
                    <label className="mb-2">Gender</label>
                    <select name="gender">
                      <option value="">Select your Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    {" "}
                    <label className="mb-2">Specialization</label>
                    <select name="gender">
                      <option value="">Gynecologist</option>
                      <option value="Specialization">Specialization</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2">Date of Birth</label>
                    <input type="date" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    {" "}
                    <label className="mb-2">Experience</label>
                    <select name="gender">
                      <option value="">Enter years of experience</option>
                      <option value="Specialization">1</option>
                      <option value="Specialization">2</option>
                      <option value="Specialization">3</option>
                      <option value="Specialization">4</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2">Country</label>
                    <select name="gender">
                      <option value="">India</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="profile-edit navbar-shadow py-4">
        <div className="container mt-3">
          <div className="">
            <div className="basic">
              <h5>Education Details</h5>
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <label className="mb-2">Degree</label>
                    <select name="gender">
                      <option value="">Select your Degree</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    {" "}
                    <label className="mb-2">College / University</label>
                    <select name="gender">
                      <option value="">Select your Option</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    {" "}
                    <label className="mb-2">Year</label>
                    <select name="gender">
                      <option value="">Select Year</option>
                      <option value="Specialization">1</option>
                      <option value="Specialization">2</option>
                      <option value="Specialization">3</option>
                      <option value="Specialization">4</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="profile-edit navbar-shadow py-4">
        <div className="container mt-3">
          <div className="">
            <div className="basic">
              <h5>Address</h5>
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <label className="mb-2">City</label>
                    <select name="gender">
                      <option value="">Select your City</option>
                      <option value="Male">Fatehabad</option>
                      <option value="Female">Hisar</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2">Pin Code</label>
                    <select name="gender">
                      <option value="">Select your Option</option>
                      <option value="Male">Fatehabad</option>
                      <option value="Female">Hisar</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    {" "}
                    <label className="mb-2">Colony / Street / Locality</label>
                    <select name="gender">
                      <option value="">Select your Option</option>
                      <option value="Specialization">Specialization</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2">State</label>
                    <select name="gender">
                      <option value="">Select your Option</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <label className="mb-2">Country</label>
                    <select name="gender">
                      <option value="">India</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="profile-edit navbar-shadow py-4">
        <div className="container mt-3">
          <div className="">
            <div className="basic">
              <h5>Registration Details</h5>
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <label>Registration Number</label>
                    <input
                      type="text"
                      placeholder="Enter Registration Number"
                    ></input>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    {" "}
                    <label className="mb-2">Registration Council</label>
                    <select name="gender">
                      <option value="">Select your Option</option>
                      <option value="Specialization">Specialization</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <label className="mb-2">Registration Year</label>
                    <select name="gender">
                      <option value="">Select Your Option</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="profile-edit navbar-shadow py-5 mb-3">
        <div className="container mt-3">
          <div className="">
            <div className="basic">
              <h5>Identity Proof</h5>
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <select name="gender">
                      <option value="">Document to be upload</option>
                      <option value="">Aadhar Card</option>
                      <option value="Specialization">Pan Card</option>
                      <option value="Specialization"> Voter Card</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    {" "}
                    <h5 className="mb-2">Upload here</h5>
                    <button className="rounded py-2">
                      <svg
                        width="34"
                        height="30"
                        viewBox="0 0 34 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32 13.3327V24.9994C32 26.8404 30.5077 28.3327 28.6667 28.3327H5.33333C3.49238 28.3327 2 26.8404 2 24.9994V9.99935C2 8.1584 3.49238 6.66602 5.33333 6.66602H7.83333C8.88252 6.66602 9.87048 6.17203 10.5 5.33268L12.25 2.99935C12.8795 2.16 13.8675 1.66602 14.9167 1.66602H19.0833"
                          stroke="white"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M27.8327 1.66602V5.83268M27.8327 5.83268V9.99935M27.8327 5.83268H23.666M27.8327 5.83268H31.9993"
                          stroke="white"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.0007 23.3333C20.6826 23.3333 23.6673 20.3486 23.6673 16.6667C23.6673 12.9848 20.6826 10 17.0007 10C13.3188 10 10.334 12.9848 10.334 16.6667C10.334 20.3486 13.3188 23.3333 17.0007 23.3333Z"
                          stroke="white"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  {/* <div>
                    <label className="mb-2">Registration Year</label>
                    <select name="gender">
                      <option value="">Select Your Option</option>
                    </select>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileEdit;
