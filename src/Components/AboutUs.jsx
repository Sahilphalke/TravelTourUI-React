import React from "react";
import hero from "../assets/AboutImage/Rectangle 19290.png";
import Navbar from "./Navbar";
import Promotion from "./Promotion";
import Footer from "./Footer";
import Explore from "./Explore";

function AboutUs() {
  return (
    <>
      <div>
        <div
          className="w-full size-lvh relative"
          style={{
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Navbar />
          <div className="flex items-center justify-center absolute left-140 top-70">
            <div>
              <h6 className="text-center font-Poppins text-white font-bold">
                READ
              </h6>
              <h1 className="text-center font-Yesteryear text-white text-9xl">
                About Us
              </h1>
            </div>
          </div>
        </div>
        <Promotion />
        <Explore />
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
