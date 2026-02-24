import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const ServicesHero = () => {
    return (
        <section className="relative bg-white overflow-hidden">

            {/* Subtle Background Accent */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-40 -z-10"></div>

            <div className="max-w-6xl mx-auto px-6 lg:px-12 py-32">

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-3xl"
                >
                    {/* Small Label */}
                    <motion.span
                        variants={fadeUp}
                        className="uppercase tracking-widest text-sm font-semibold text-blue-700"
                    >
                        Our Services
                    </motion.span>

                    {/* Main Heading */}
                    <motion.h1
                        variants={fadeUp}
                        className="mt-6 lg:text-5xl text-3xl md:text-4xl font-semibold text-black leading-normal"
                    >
                        Strategic IT & <span className="text-blue-700">Digital Solutions</span>
                        <br />
                        Designed for Sustainable Growth
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        className="mt-6 text-gray-700 text-base leading-relaxed"
                    >
                        We help businesses build scalable digital products,
                        optimize technology infrastructure, and accelerate
                        long-term growth through high-performance development solutions.
                    </motion.p>

                    {/* CTA */}
                    <motion.div variants={fadeUp} className="mt-8 flex gap-4">

                        <Link
                            to="/contact"
                            className="px-6 py-3 bg-blue-600 text-white text-sm rounded-md hover:bg-gray-800 transition duration-300"
                        >
                            Get Consultation
                        </Link>

                        <Link
                            to="/about"
                            className="px-6 py-3 border border-gray-400 text-sm rounded-md hover:border-black hover:text-black transition duration-300"
                        >
                            Learn More
                        </Link>

                    </motion.div>
                </motion.div>

                {/* Bottom Divider */}
                <div className="mt-20 border-t border-gray-100"></div>

            </div>
        </section>
    );
};

export default ServicesHero;