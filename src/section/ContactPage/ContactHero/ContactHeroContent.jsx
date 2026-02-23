import { motion } from "framer-motion";

const ContactHeroContent = () => {
    return (
        <div className="text-center max-w-3xl mx-auto">

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
                Contact <span className="text-blue-700">CH Info</span> Solution
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-gray-600 leading-relaxed"
            >
                Have a project in mind? Let's discuss how we can help your business grow with smart digital solutions.
            </motion.p>

        </div>
    );
};

export default ContactHeroContent;