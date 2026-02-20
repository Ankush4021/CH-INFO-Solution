
import { motion } from "framer-motion";

const data = [
    {
        title: "Client-Centric Approach",
        desc: "We prioritize long-term relationships by understanding and aligning with your business goals."
    },
    {
        title: "Customized IT Solutions",
        desc: "Every solution is tailored to meet your operational and strategic requirements."
    },
    {
        title: "Modern Technology Stack",
        desc: "We leverage the latest tools and technologies for scalable and secure systems."
    },
    {
        title: "Reliable Ongoing Support",
        desc: "Our team ensures continuous support to maintain and improve performance."
    }
];

const OverviewGrid = () => {
    return (
        <div className="grid md:grid-cols-2 gap-10 mt-20 text-left">
            {data.map((item, index) => (
                <motion.div
                    key={index}
                    className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {item.title}
                    </h3>
                    <p className="text-gray-600">
                        {item.desc}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default OverviewGrid;