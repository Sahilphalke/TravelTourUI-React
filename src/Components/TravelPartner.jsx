import React from "react";

import partner1 from "../assets/HomeImage/partner909.png";
import partner2 from "../assets/HomeImage/partner2.png";
import partner3 from "../assets/HomeImage/partner3.png";
import partner4 from "../assets/HomeImage/partner4.png";
import partner5 from "../assets/HomeImage/partner5.png";

function TravelPartner() {
  return (
    <>
      <div className="w-full  flex justify-between items-center p-6">
        <img src={partner1} alt="wait for image" />
        <img src={partner2} alt="wait for image" />
        <img src={partner3} alt="wait for image" />
        <img src={partner4} alt="wait for image" />
        <img src={partner5} alt="wait for image" />
      </div>
    </>
  );
}

export default TravelPartner;
