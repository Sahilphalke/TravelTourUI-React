import img1 from "../assets/AboutImage/1.png";
import img2 from "../assets/AboutImage/2.png";
import img3 from "../assets/AboutImage/3.png";
import img4 from "../assets/AboutImage/4.png";
import img5 from "../assets/AboutImage/5.png";
import img6 from "../assets/AboutImage/6.png";
import img7 from "../assets/AboutImage/7.png";
import img8 from "../assets/AboutImage/8.png";
import img9 from "../assets/AboutImage/9.png";
import img10 from "../assets/AboutImage/10.png";
import img11 from "../assets/AboutImage/11.png";
import React from "react";
function Explore() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-6xl p-5 mt-5">
          <div className="text-center mb-10">
            <h6 className="text-amber-500 font-Poppins font-bold mb-3">
              EXPLORE MORE
            </h6>
            <h1 className="font-Volkhov text-blue-950 text-4xl">
              Our International Packages
            </h1>
          </div>
          <div class="grid md:grid-cols-4 grid-rows-3 sm:grid-cols-2 gap-5">
            <div class="relative col-start-1 col-end-2 row-start-1 row-end-2">
              <img src={img2} alt="" />
              <h1 class="absolute bottom-2 left-6 text-amber-50 font-bold font-Poppins">
                Barcelona
              </h1>
              <h1 class="absolute bottom-2 right-6 text-amber-50 font-Poppins font-bold">
                $840
              </h1>
            </div>
            <div class="relative  col-start-2 col-end-3 row-start-1 row-end-2 ">
              <img src={img3} alt="" />
              <h1 class="absolute bottom-2 left-6 text-amber-50 font-bold font-Poppins">
                Switzerland
              </h1>
              <h1 class="absolute bottom-2 right-6 text-amber-50 font-Poppins font-bold">
                $840
              </h1>
            </div>
            <div class="relative  col-start-3 col-end-4 row-start-1 row-end-3 flex justify-center ">
              <img src={img1} className="h-136.5" alt="" />
              <h1 class="absolute bottom-2 left-6 text-amber-50 font-bold font-Poppins">
                Rio de Jenero
              </h1>
              <h1 class="absolute bottom-2 right-6 text-amber-50 font-Poppins font-bold">
                $840
              </h1>
            </div>
            <div class="relative  col-start-4 col-end-5 row-start-1 row-end-2 ">
              <img src={img4} alt="" />
              <h1 class="absolute bottom-2 left-6 text-amber-50 font-bold font-Poppins">
                Barcelona
              </h1>
              <h1 class="absolute bottom-2 right-6 text-amber-50 font-Poppins font-bold">
                $840
              </h1>
            </div>
            <div class="relative  col-start-1 col-end-2 row-start-2 row-end-3 ">
              <img src={img5} alt="" />
              <h1 class="absolute bottom-2 left-6 text-amber-50 font-bold font-Poppins">
                Tommorow land
              </h1>
              <h1 class="absolute bottom-2 right-6 text-amber-50 font-Poppins font-bold">
                $840
              </h1>
            </div>
            <div class="relative  col-start-2 col-end-3 row-start-2 row-end-3 ">
              <img src={img6} alt="" />
              <h1 class="absolute bottom-2 left-6 text-amber-50 font-bold font-Poppins">
                Los Angelas
              </h1>
              <h1 class="absolute bottom-2 right-6 text-amber-50 font-Poppins font-bold">
                $840
              </h1>
            </div>
            <div class="relative  col-start-4 col-end-5 row-start-2 row-end-3 ">
              <img src={img7} alt="" />
              <h1 class="absolute bottom-2 left-6 text-amber-50 font-bold font-Poppins">
                India
              </h1>
              <h1 class="absolute bottom-2 right-6 text-amber-50 font-Poppins font-bold">
                $840
              </h1>
            </div>
            <div class="relative  col-start-1 col-end-2 row-start-3 row-end-4">
              <img src={img8} alt="" />
              <h1 class="absolute bottom-2 left-6 text-amber-50 font-bold font-Poppins">
                Barcelona
              </h1>
              <h1 class="absolute bottom-2 right-6 text-amber-50 font-Poppins font-bold">
                $840
              </h1>
            </div>
            <div class="relative  col-start-2 col-end-3 row-start-3 row-end-4">
              <img src={img9} alt="" />
              <h1 class="absolute bottom-2 left-6 text-amber-50 font-bold font-Poppins">
                Maldives
              </h1>
              <h1 class="absolute bottom-2 right-6 text-amber-50 font-Poppins font-bold">
                $840
              </h1>
            </div>
            <div class="relative  col-start-3 col-end-4 row-start-3 row-end-4">
              <img src={img10} alt="" />
              <h1 class="absolute bottom-2 left-6 text-amber-50 font-bold font-Poppins">
                Barcelona
              </h1>
              <h1 class="absolute bottom-2 right-6 text-amber-50 font-Poppins font-bold">
                $840
              </h1>
            </div>
            <div class="relative  col-start-4 col-end-5 row-start-3 row-end-4">
              <img src={img11} alt="" />
              <h1 class="absolute bottom-2 left-6 text-amber-50 font-bold font-Poppins">
                New Zealand
              </h1>
              <h1 class="absolute bottom-2 right-6 text-amber-50 font-Poppins font-bold">
                $840
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
