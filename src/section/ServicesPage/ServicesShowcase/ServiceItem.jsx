import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const ServiceItem = ({ service, reverse }) => {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row items-center gap-12 ${reverse ? "lg:flex-row-reverse" : ""
                }`}
        >
            {/* Image */}
            <div className="lg:w-1/2">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[320px] object-cover rounded-xl shadow-sm"
                />
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
                <div className="w-12 h-[2px] bg-blue-600 mb-6"></div>

                <h3 className="text-2xl font-semibold text-black">
                    {service.title}
                </h3>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {service.description}
                </p>

                <a
                    href="/contact"
                    className="inline-block mt-6 text-blue-600 text-sm font-medium hover:underline"
                >
                    Request Service →
                </a>
            </div>
        </motion.div>
    );
};

export default ServiceItem;