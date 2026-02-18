import React from "react";
import aboutImg from "../../../assets/about-section/about.jpg";

const AboutVisual = () => {
  return (
    <div className="relative">
      <div className="rounded-3xl overflow-hidden shadow-2xl">
        <img
          src={aboutImg}
          alt="CH Info Solution"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Soft depth shadow */}
      <div className="absolute -bottom-6 left-12 w-3/4 h-10 bg-indigo-200 blur-2xl opacity-40 -z-10"></div>
    </div>
  );
};

export default AboutVisual;
