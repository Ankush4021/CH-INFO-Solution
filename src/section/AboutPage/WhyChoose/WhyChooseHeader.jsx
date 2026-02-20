import { motion } from "framer-motion";

const WhyChooseHeader = () => {
    return (
        <motion.div
            className="text-center max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <span className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
                Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Delivering Technology That
                <span className="text-blue-600"> Drives Results</span>
            </h2>

            <p className="text-gray-600 text-lg">
                We combine expertise, strategy, and commitment to deliver
                measurable outcomes that help businesses grow confidently.
            </p>
        </motion.div>
    );
};

export default WhyChooseHeader;