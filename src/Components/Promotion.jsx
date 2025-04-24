import { createRoutesFromElements } from "react-router-dom";
import promotion from "../assets/AboutImage/Ellipse 626.png";
import round from "../assets/AboutImage/Ellipse 627.png";
import back from "../assets/AboutImage/bg style.png";
import React from "react";
function Promotion() {
  return (
    <>
      <div className="w-full borde-2 flex justify-center mt-20 mb-20">
        <div className="w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-2">
            <div className="flex items-center">
              <div className="">
                <h6 className="text-amber-500 font-bold font-Poppins mb-5">
                  PROMOTION
                </h6>
                <h1 className="font-Volkhov text-4xl mb-5">
                  We Provide You Best <br /> Europe Sightseeing Tours
                </h1>
                <p className="mb-5">
                  Et labore harum non nobis ipsum eum molestias mollitia et
                  corporis <br /> praesentium a laudantium internos. Non quis
                  eius quo eligendi corrupti <br /> et fugiat nulla qui soluta
                  recusandae in maxime quasi aut ducimus <br /> illum aut optio
                  quibusdam!
                </p>
                <button
                  type="sybmit"
                  className="bg-amber-500 p-2 text-white rounded-xl"
                >
                  View Packages
                </button>
              </div>
            </div>
            <div className=" flex justify-center">
              <div className="relative">
                <img src={back} />
              </div>
              <img
                src={round}
                className="absolute w-112 h-110 -bottom-125"
                alt=""
              />
              <img src={promotion} className="absolute w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Promotion;
