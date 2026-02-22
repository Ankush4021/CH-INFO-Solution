import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const WhyCard = ({ item, index }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="relative p-8 rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group overflow-hidden"
    >
      {/* Large Background Number */}
      <span className="absolute top-6 right-6 text-6xl font-bold text-gray-100 select-none">
        0{index + 1}
      </span>

      {/* Left Accent Line */}
      <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full mb-6"></div>

      <h3 className="text-lg font-semibold text-black group-hover:text-blue-600 transition duration-300">
        {item.title}
      </h3>

      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
};

export default WhyCard;