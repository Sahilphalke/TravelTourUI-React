import hero from "../assets/HomeImage/Hero19290.png";
import fullimage from "../assets/HomeImage/Rectangle 19294.png";
import React from "react";
import Navbar from "./Navbar";
import TravelPartner from "./TravelPartner";
import Category from "./Category";
import Specials from "./Specials";
import Footer from "./Footer";

function HomePage() {
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
          <div className="w-full h-150 flex justify-center items-center">
            <div className="w-6xl  p-2">
              <div className="w-130 ">
                <h1 className="font-Poppins font-bold text-amber-50 text-5xl leading-16">
                  No matter where you’re going to, we’ll take you there
                </h1>
              </div>
              <div className=" w-155 p-4  backdrop-blur-[2px] bg-amber-50 mt-2 rounded-xl bg-">
                <form action="">
                  <div className="flex justify-start items-center gap-3">
                    <div className="border-r-2 pr-1">
                      <input
                        type="text"
                        className="text-center placeholder-zinc-950 w-35 border-0 border-b-2"
                        placeholder="Where to?"
                        required
                      />
                    </div>
                    <div className="border-r-2 pr-1.5">
                      <label for="travelTime">Travel Type?</label>
                      <select id="travelTime" placeholder="Travel Type?">
                        <option value="bus">Bus</option>
                        <option value="train">Train</option>
                        <option value="airplane">Airplane</option>
                      </select>
                    </div>
                    <div className="border-r-2 pr-1.5">
                      <label for="duration">Duration</label>
                      <select id="duration">
                        <option value="10hrs">10hrs</option>
                        <option value="10hrs">20hrs</option>
                        <option value="10hrs">30hrs</option>
                        <option value="10hrs">40hrs</option>
                      </select>
                    </div>
                    <button className=" p-5 pt-2 pb-2 rounded-xl  border-y-violet-950 bg-amber-500 text-amber-50 ">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <TravelPartner />
        <Category />
        {/* holiday section  */}
        <div className="w-full">
          <div className="relative">
            <img src={fullimage} alt="wait for image" />
            <h1 className="font-Volkhov text-5xl absolute top-27 text-amber-50 left-50">
              Let’s make your <br /> next holiday amazing
            </h1>
          </div>
        </div>
        <Specials />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
