import logo from "../assets/HomeImage/logo.png";
import footerimg from "../assets/HomeImage/Footer img.png";
import React from "react";
function Footer() {
  return (
    <>
      <div className="relative pb-5 w-full flex justify-center align-middle items-center bg-indigo-100">
        <div className="w-6xl">
          <img
            src={footerimg}
            className="absolute right-0 bottom-0"
            alt=""
            width={"25%"}
          />
          <div className="grid grid-cols-5 mt-5 p-2">
            <div className=" p-2">
              <img src={logo} className="mb-3" alt="" />
              <p className="text-black">
                Travel helps companies manage payments easily.
              </p>
            </div>
            <div className=" p-2 flex justify-center font-Poppins text-black">
              <div className="mt-5">
                <h1 className="mb-3 text-2xl font-Volkhov">Company</h1>
                <ul>
                  <li className="pb-2">About Us</li>
                  <li className="pb-2">Careers</li>
                  <li className="pb-2">Blog</li>
                  <li className="pb-2">Pricing</li>
                </ul>
              </div>
            </div>
            <div className=" p-2 text-black">
              <div className="mt-5">
                <h1 className="mb-3 text-2xl font-Volkhov">Destination</h1>
                <ul>
                  <li className="pb-2">Maldives</li>
                  <li className="pb-2">Los Angelas</li>
                  <li className="pb-2">Las Vegas</li>
                  <li className="pb-2">Torronto</li>
                </ul>
              </div>
            </div>
            <div className=" p-2 col-span-2 text-black font-Poppins">
              <div className="mt-5">
                <h1 className="mb-3 text-2xl font-Volkhov">
                  Join Our Newsletter
                </h1>
                <div className="mb-4">
                  <input
                    type="email"
                    className=" p-2 border-r-0 placeholder-gray-950 border-b-1 border-b-black"
                    placeholder="Your email address"
                  />
                  <button className="bg-amber-500 p-2 rounded-xl font-Poppins">
                    Subscribe
                  </button>
                </div>
                <p className="font-Poppins text-zinc-700">
                  * Will send you weekly updates for your better <br /> tour
                  packages.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <hr className="" width={"98%"} />
          </div>
          <h1 className="text-center mt-5 font-Poppins">
            Copyright @ Xpro 2022. All Rights Reserved.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
