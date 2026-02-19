import { motion } from "framer-motion";

const AnimatedHeading = ({ children }) => {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
        >
            {children}
        </motion.h2>
    );
};

export default AnimatedHeading;
