
import { motion } from "framer-motion";

const OverviewIntro = () => {
    return (
        <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >

            <span className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
                Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                A Trusted Technology Partner
                <br />
                For Modern Businesses
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                CH Info Solutions helps businesses simplify technology,
                optimize operations, and unlock growth through innovative,
                scalable, and result-driven IT solutions.
            </p>

        </motion.div>
    );
};

export default OverviewIntro;