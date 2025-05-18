"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import About from "./About";
import Benefits from "./Benefits";
import BestSelling from "./BestSelling/BestSelling";
import Hero from "./Hero";
import Price from "./Price/Price";
import Review from "./Review/Review";
import { useEffect } from "react";

const Home = () => {
  // useEffect(() => {
  //   const initAOS = async () => {
  //     await import("aos");
  //     AOS.init({
  //       duration: 1000,
  //       easing: "ease",
  //       once: true,
  //       anchorPlacement: "top-bottom",
  //     });
  //   };

  //   initAOS();
  // }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Benefits />
      <BestSelling />
      <Price />
      <Review />
    </div>
  );
};

export default Home;
