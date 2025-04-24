import hero from "../assets/PackageImage/Hero.png";
import React from "react";
import Navbar from "./Navbar";
import PackageList from "./PackageList";
import Footer from "./Footer";
function Package() {
  return (
    <>
      <div>
        <div
          className="w-full h-screen relative"
          style={{
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Navbar />
          <div className="flex items-center justify-center absolute left-110 top-70">
            <div>
              <h6 className="text-center font-Poppins text-white font-bold mb-8">
                SEARCH TOUR
              </h6>
              <h1 className="text-center font-Yesteryear text-white text-9xl">
                Travel With Us
              </h1>
            </div>
          </div>
        </div>
        <PackageList />
        <Footer />
      </div>
    </>
  );
}

export default Package;
