import React from "react";

const highlights = [
  {
    title: "Experienced Team",
    desc: "Skilled professionals delivering modern IT solutions."
  },
  {
    title: "Scalable Solutions",
    desc: "Future-ready architecture built for growth."
  },
  {
    title: "Client Focused",
    desc: "We prioritize transparency and long-term partnerships."
  }
];

const AboutHighlights = () => {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {highlights.map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutHighlights;
