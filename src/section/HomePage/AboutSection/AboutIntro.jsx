import React from "react";
import AnimatedHeading from "../../../components/ui/AnimatedHeading";
import { Link } from "react-router-dom";

const AboutIntro = () => {
  return (
    <div className="space-y-8 transition-all duration-700 hover:-translate-y-1">

      <p className="text-indigo-600 font-semibold tracking-widest uppercase">
        About Us
      </p>

      <AnimatedHeading className="text-5xl font-bold text-gray-900 leading-tight" >
        We Craft Digital Solutions
        <br />
        That Build Real Business Impact
      </AnimatedHeading>

      <p className="text-gray-600 text-lg max-w-xl">
        CH Info Solution helps businesses grow with scalable web,
        mobile, and IT services built with modern technology
        and strategic thinking.
      </p>

      {/* CTA Button */}
      <Link
        to="/about"
        className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold"
      >
        Learn More
      </Link>

    </div>
  );
};

export default AboutIntro;
