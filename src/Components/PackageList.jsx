import React from "react";
import PackageTrip from "./PackageTrip";
import { Link } from "react-router-dom";
import PriceLowToHigh from "./PriceLowToHigh";

function PackageList() {
  return (
    <>
      <div className="w-full  flex justify-center">
        <div className="w-6xl absolute bottom-0">
          <div className="grid md:grid-cols-4 bg-stone-100">
            <div className="p-3 hover:bg-amber-500 hover:text-zinc-50 ">
              <div className="flex justify-center gap-3">
                📅
                <h1 className="font-semibold  font-Poppins text-center">
                  Date
                </h1>
              </div>
            </div>
            <div className="p-3  hover:bg-amber-500 hover:text-zinc-50 ">
              <h1 className="font-semibold font-Poppins text-center">
                <Link to="/package/pricelow">price low to High</Link>
              </h1>
            </div>
            <div className="p-3  hover:bg-amber-500 hover:text-zinc-50 ">
              <h1 className="font-semibold  font-Poppins text-center">
                <Link to="/package/pricehigh">Price High to low</Link>
              </h1>
            </div>
            <div className="p-3  hover:bg-amber-500 hover:text-zinc-50 ">
              <h1 className="font-semibold font-Poppins text-center">
                Name (A-z)
              </h1>
            </div>
          </div>
        </div>
        <PackageTrip />
      </div>
      {/* <PriceLowToHigh /> */}
    </>
  );
}

export default PackageList;
