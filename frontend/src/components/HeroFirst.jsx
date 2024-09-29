import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Slider from "./Components/Slider/Slider";
import Notes from "./Components/Notes/Notes";
import Courses from "./Components/Courses/Courses";
import CallToAction from "./Components/CallToAction/CallToAction";

export default function HeroFirst() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <Notes />
      <Courses />
      <CallToAction />
    </>
  );
}
