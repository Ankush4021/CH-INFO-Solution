import { motion } from "framer-motion";
import HeroStats from "./HeroStats";
import { Link } from "react-router-dom";

const HeroContent = () => {
    return (
        <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >

            <div className="space-y-6">
                <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
                    About CH Info Solutions
                </span>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Empowering Businesses
                    <br />
                    Through <span className="text-blue-600">Smart IT Solutions</span>
                </h1>

                <p className="text-gray-600 text-lg max-w-xl">
                    We deliver reliable, scalable, and innovative technology services
                    designed to help businesses grow, streamline operations,
                    and stay ahead in today's digital landscape.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Link
                    to={"/contact"}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300">
                        Contact Us
                    </Link>

                    <Link 
                    to="/services"
                    className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-3 rounded-lg transition-all duration-300">
                        Explore Services
                    </Link>
                </div>
            </div>

            <HeroStats />

        </motion.div>
    );
};

export default HeroContent;