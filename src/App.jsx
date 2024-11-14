import "./App.css";
import React from "react";
import Header from "./components/header/header";
import Country from "./components/country/country";
import Swiper from "./components/swiper/swiper";
import Viza from "./components/viza/viza";
import Transport from "./components/transport/transport";
import Count from "./components/count/count";
import Contact from "./components/contact/contact";
import Map from "./components/map/map";
import LastSwiper from "./components/lastSwiper/lastswiper";
function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Country />
        <Swiper />
        <Viza />
        <Transport />
        <Count />
        <Contact />
        <Map />
        <LastSwiper />
      </>
    </div>
  );
}

export default App;
