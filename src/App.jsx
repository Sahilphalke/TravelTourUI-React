import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import TravelPartner from "./Components/TravelPartner";
import AboutUs from "./Components/AboutUs";
import Package from "./Components/Package";
import PriceLowToHigh from "./Components/PriceLowToHigh";
import PackageTrip from "./Components/PackageTrip";
import MyTab from "./test-tab";

function App() {
  return (
    <>
      {/* <MyTab /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/package" element={<Package />}>
            <Route path="/package/pricehigh" element={<PackageTrip />} />
            <Route path="/package/pricelow" element={<PriceLowToHigh />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
