import React from "react";
import special1 from "../assets/HomeImage/image 50.png";
import special2 from "../assets/HomeImage/Ellipse 1.png";
import special3 from "../assets/HomeImage/Ellipse 2.png";
import special4 from "../assets/HomeImage/Ellipse 3.png";

function Specials() {
  return (
    <>
      <div className="w-full flex justify-center mt-15 mb-5">
        <div className="w-6xl  mt-5">
          <div className="grid grid-cols-2 mt-2">
            <div className="p-5 ">
              <div className=" flex justify-center relative ">
                <img
                  src={special1}
                  width={"60%"}
                  className="rounded-t-full border-r-1 border-t-1 border-y-amber-800 border-x-blue-700 p-2"
                />
                <h1 className="font-Volkhov absolute -rotate-90 text-3xl text-zinc-400 -left-17 top-66 ">
                  Honeymoon Packages
                </h1>
                <img
                  src={special2}
                  alt=""
                  className="absolute left-10 w-40 -top-5"
                />
                <img
                  src={special3}
                  className="absolute w-50 -left-12 top-30 border-y-fuchsia-50"
                  alt=""
                />
                <img
                  src={special4}
                  alt=""
                  className="absolute w-50 -top-13 left-30"
                />
              </div>
            </div>
            <div className="p-5 flex items-center">
              <div className="">
                <h6 className="font-Poppins text-amber-500 font-semibold mb-3">
                  HONEYMOON SPECIALS
                </h6>
                <h1 className="font-Volkhov text-4xl text-blue-950 mb-3">
                  Our Romantic Tropical Destinations
                </h1>
                <p className="font-Poppins mb-3">
                  Et labore harum non nobis ipsum eum molestias mollitia et
                  corporis praesentium a laudantium internos. Non quis eius quo
                  eligendi corrupti et fugiat nulla qui soluta recusandae in
                  maxime quasi aut ducimus illum aut optio quibusdam!
                </p>
                <button
                  type="submit"
                  className="btn bg-amber-500 font-Poppins p-2 rounded-xl text-white"
                >
                  View Packages
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Specials;
