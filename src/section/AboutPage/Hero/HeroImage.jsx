// sections/AboutPage/Hero/HeroImage.jsx
import { motion } from "framer-motion";
import aboutImage from "../../../assets/anoutpage/herosection/about-hero.webp";

const HeroImage = () => {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >

            {/* Soft Glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

            {/* Floating Card */}
            <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
                <img
                    src={aboutImage}
                    alt="CH Info Solutions Team"
                    className="rounded-2xl w-full object-cover"
                />
            </div>

        </motion.div>
    );
};

export default HeroImage;