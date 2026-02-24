import ServiceItem from "./ServiceItem";
import servicesData from "./servicesData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Services = () => {
    return (
        <section
            id="services"
            className="bg-white py-20"
            aria-labelledby="services-heading"
        >
            {/* Header */}
            <motion.div
                className="text-center px-6 mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <span className="uppercase text-blue-700 tracking-widest text-sm font-semibold">
                    Our IT Services
                </span>

                <h2
                    id="services-heading"
                    className="text-4xl md:text-6xl font-bold mt-6 text-gray-900"
                >
                    Professional IT Solutions for Business & Home
                </h2>

                <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                    We provide complete IT support including AMC services, laptop repair,
                    networking setup, CCTV installation, printer servicing and IT hardware sales.
                </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
                className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {servicesData.map((service) => (
                    <motion.div key={service.slug} variants={fadeUp}>
                        <ServiceItem service={service} />
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA */}
            <motion.div
                className="mt-20 py-16 text-center bg-gray-50"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                    Need Reliable IT Support for Your Business?
                </h3>

                <Link
                    to="/contact"
                    className="inline-block px-10 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform duration-300 hover:scale-105"
                >
                    Get Free Consultation
                </Link>
            </motion.div>
        </section>
    );
};

export default Services;