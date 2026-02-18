import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    heading: "Innovative IT Solutions",
    sub: "We deliver reliable and scalable technology solutions that empower businesses to grow faster and smarter."
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    heading: "Reliable Hardware & Sales",
    sub: "High-performance systems and infrastructure tailored to your business needs."
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    heading: "Professional IT Support",
    sub: "Expert assistance and technical support ensuring smooth operations."
  },
  {
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    heading: "Secure Networking Services",
    sub: "Advanced security and networking solutions to protect your digital assets."
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={`${slide.image}?auto=format&fit=crop&w=1600&q=60`}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      <div className="relative text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700">
          {slides[current].heading}
        </h1>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          {slides[current].sub}
        </p>

        <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Explore Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
