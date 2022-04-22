import React from "react";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Line from "./sheard/components/line";
import Technologies from "./components/Technologies/Technologies";
import Testimonials from "./components/Testimonials/Testimonials";
import ScrollTopButton from "./sheard/components/ScrollTopButton/ScrollTopButton";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <ScrollTopButton />
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Line />
      <Technologies />
      <Line />
      <Footer />
    </div>
  );
};

export default App;
