import React, { act, useEffect, useState } from "react";

const MyTab = () => {
  const [active, setActive] = useState({
    id: null,
  });

  useEffect(() => {
    setActive({ id: "apple" });
  }, []);
  return (
    <div>
      <div className="flex gap-6 container mx-auto mt-12">
        <div
          className={`${active.id === "apple" ? "bg-green-600" : ""}`}
          onClick={() => setActive({ id: "apple" })}
        >
          apple
        </div>
        <div
          className={`${active.id === "banana" ? "bg-green-600" : ""}`}
          onClick={() => setActive({ id: "banana" })}
        >
          banana
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <div className={`${active.id === "apple" ? "" : "hidden"}`}>
          content for apple
        </div>
        <div className={`${active.id === "banana" ? "" : "hidden"}`}>
          content for banana
        </div>
      </div>
    </div>
  );
};

export default MyTab;
