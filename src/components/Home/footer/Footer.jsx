import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 pb-12 mx-auto">
          <div class="flex flex-wrap md:text-left text-center mb-10 mx-4">
            <div class="lg:w-1/5 md:w-1/2 w-full px-4 ">
              <h2 class="title-font  text-gray-900 tracking-widest text-base font-semibold  mb-3">
                Our Company
              </h2>
              <nav class="list-none mb-10 footer_row">
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none ">
                    Home
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Services
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Terms and Conditions
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 class="title-font text-gray-900 tracking-widest mb-3 text-base font-semibold">
                For Doctors
              </h2>
              <nav class="list-none mb-10 footer_row">
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Profile
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Consultation
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Appointments
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Timing
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Reveiws
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 class="title-font text-gray-900 tracking-widest mb-3 text-base font-semibold">
                For Pharmacy
              </h2>
              <nav class="list-none mb-10 footer_row">
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Shop Profile
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Products
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Order
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    eWallet
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 class="title-font text-gray-900 tracking-widest  mb-3 text-base font-semibold">
                For Lab
              </h2>
              <nav class="list-none mb-10 footer_row">
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Lab Profile
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Test Booking
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Reports
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    eWallet
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 class="title-font text-gray-900 tracking-widest  mb-3 text-base font-semibold">
                Social
              </h2>
              <nav class="list-none mb-10 footer_row">
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Instagram
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Facebook
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Youtube
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-decoration-none">
                    Linkedin
                  </a>
                </li>
              </nav>
            </div>
            {/* <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800 text-decoration-none">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800 text-decoration-none">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800 text-decoration-none">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800 text-decoration-none">Fourth Link</a>
          </li>
        </nav>
      </div> */}
          </div>
        </div>

        {/* <div class="hs-dropdown relative inline-flex">
  <button id="hs-dropdown-default" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    Actions
    <svg class="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>

  <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-default">
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
      Newsletter
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
      Purchases
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
      Downloads
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
      Team Account
    </a>
  </div>
</div> */}

        <div class="bg-gray-100  copyRight_heading">
          <div class="container mx-auto py-4 px-5 flex flex-wrap justify-center sm:flex-row">
            <p>Copy Right© 2024 avijo.All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
