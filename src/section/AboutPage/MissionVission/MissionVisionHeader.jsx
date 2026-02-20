import { motion } from "framer-motion";

const MissionVisionHeader = () => {
    return (
        <motion.div
            className="text-center max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <span className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
                Our Foundation
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Mission & Vision
            </h2>

            <p className="text-gray-600 text-lg">
                Our purpose is driven by innovation, growth, and long-term partnerships.
            </p>
        </motion.div>
    );
};

export default MissionVisionHeader;