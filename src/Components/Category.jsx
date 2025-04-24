import service1 from "../assets/HomeImage/tour-guide 1.png";
import service2 from "../assets/HomeImage/travelling 1.png";
import service3 from "../assets/HomeImage/hands 1.png";
import service4 from "../assets/HomeImage/medical-team 1.png";
import React from "react";
function Category() {
  return (
    <>
      <div className="w-full mb-5 mt-5 p-2 flex justify-center">
        <div className="w-6xl mt-8 ">
          <h6 className="text-center font-Poppins font-medium text-amber-500 mb-3 ">
            CATEGORY
          </h6>
          <h1 className="text-center font-Volkhov text-4xl font-semibold mb-8 text-blue-950">
            We Offer Best Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 ">
            <div className="p-5 relative overflow-hidden">
              <div className=" h-70 w-55 flex justify-center items-center rounded-4xl shadow-lg bg-white">
                <div>
                  <div className="relative flex justify-center ">
                    <img src={service1} alt="wait for image" />
                  </div>
                  <div className="mt-3">
                    <h4 className="text-center mb-2 font-Poppins text-blue-950 font-semibold">
                      Guided Tours
                    </h4>
                    <p className="text-center font-Poppins text-zinc-500">
                      sunt qui repellat saepe <br /> quo velit aperiam id <br />{" "}
                      aliquam placeat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 relative overflow-hidden">
              <div className="h-70 w-55 flex justify-center items-center rounded-4xl shadow-lg bg-amber-50">
                <div>
                  <div className="relative flex justify-center ">
                    <img src={service2} alt="wait for image" />
                  </div>
                  <div className="mt-3">
                    <h4 className="text-center mb-2 font-Poppins text-blue-950 font-semibold">
                      Best Flights Options
                    </h4>
                    <p className="text-center font-Poppins text-zinc-500">
                      sunt qui repellat saepe <br /> quo velit aperiam id <br />{" "}
                      aliquam placeat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 relative overflow-hidden">
              <div className=" h-70 w-55 flex justify-center items-center shadow-lg rounded-4xl bg-white">
                <div>
                  <div className="relative flex justify-center ">
                    <img src={service3} alt="wait for image" />
                  </div>
                  <div className="mt-3">
                    <h4 className="text-center mb-2 font-Poppins text-blue-950 font-semibold">
                      Religious Tours
                    </h4>
                    <p className="text-center font-Poppins text-zinc-500">
                      sunt qui repellat saepe <br /> quo velit aperiam id <br />{" "}
                      aliquam placeat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 relative overflow-hidden">
              <div className="h-70 w-55 flex justify-center items-center rounded-4xl shadow-lg bg-amber-50">
                <div>
                  <div className="relative flex justify-center ">
                    <img src={service4} alt="wait for image" />
                  </div>
                  <div className="mt-3">
                    <h4 className="text-center mb-2 font-Poppins text-blue-950 font-semibold">
                      Medical insurance
                    </h4>
                    <p className="text-center font-Poppins text-zinc-500">
                      sunt qui repellat saepe <br /> quo velit aperiam id <br />{" "}
                      aliquam placeat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
