import { motion } from "framer-motion";
import WhyCard from "./WhyCard";
import whyData from "./whyData";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const WhyChooseUs = () => {
    return (
        <section className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Section Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black">
                        Why <span className="text-blue-700">Choose Our</span> IT Services?
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                        We combine technical expertise, fast service delivery,
                        and customer-focused IT solutions to ensure seamless
                        business operations.
                    </p>
                </div>

                {/* Cards Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {whyData.map((item, index) => (
                        <WhyCard key={index} item={item} index={index} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default WhyChooseUs;