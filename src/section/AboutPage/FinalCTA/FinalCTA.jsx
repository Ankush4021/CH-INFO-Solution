// sections/AboutPage/FinalCTA/FinalCTA.jsx

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const FinalCTA = () => {
    return (
        <section className="bg-gray-50 py-28npm ">
            <div className="max-w-5xl mx-auto px-6 text-center py-14">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-500 leading-tight">
                        Let's Build Smarter
                        <br />
                        <span className="text-blue-700">
                            Digital Solutions Together
                        </span>
                    </h2>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Partner with CH Info Solutions to transform your business
                        through reliable and scalable IT services designed for long-term success.
                    </p>

                    <div className="flex justify-center gap-6 pt-6">
                        <Link
                            to={"/contact"}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition duration-300"
                        >
                            Get in Touch
                        </Link>

                        <Link
                            to="/services"
                            className="border border-gray-600 text-gray-900 hover:text-blue-800 hover:border-blue-700 px-8 py-4 rounded-xl transition duration-300"
                        >
                            Explore Services
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default FinalCTA;