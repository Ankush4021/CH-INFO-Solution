import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Experienced IT Professionals",
    desc: "Our skilled team delivers modern and result-driven IT solutions tailored to business needs."
  },
  {
    title: "Scalable Technology Solutions",
    desc: "We design future-ready architecture that supports business growth and digital transformation."
  },
  {
    title: "Client-Centric Approach",
    desc: "We prioritize transparency, communication, and long-term partnerships for sustainable success."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const AboutHighlights = () => {
  return (
    <section
      className="py-14"
      aria-labelledby="about-highlights-heading"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SEO Friendly Section Heading */}
        <div className="text-center mb-14">
          <h2
            id="about-highlights-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Why Choose Our IT Solutions
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide innovative, scalable, and client-focused IT services designed to help businesses succeed in the digital era.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-50 rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHighlights;