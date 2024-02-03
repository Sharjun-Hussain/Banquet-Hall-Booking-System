import React from "react";
import NavBar from "../Components/NavBar";
import { Carasoul } from "../Components/Carasoul";

import Services from "../Components/Services";
import HowWorks from "../Components/HowWorks";
import Footer from "../Components/Footer";
import PopupForm from "../Components/PopupForm";



const Home = () => {
  return (
    <div>
      <NavBar />
      <Carasoul />
      <PopupForm />
      <Services />

      <HowWorks />
      
      <Footer />
    </div>
  );
};

export default Home;
