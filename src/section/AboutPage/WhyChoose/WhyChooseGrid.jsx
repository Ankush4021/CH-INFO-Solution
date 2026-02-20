import { motion } from "framer-motion";

const data = [
    {
        title: "Experienced Professionals",
        desc: "Our skilled team brings years of hands-on industry experience."
    },
    {
        title: "Strategic IT Planning",
        desc: "We align technology solutions with your long-term business goals."
    },
    {
        title: "Scalable Solutions",
        desc: "Our systems are designed to grow as your business expands."
    },
    {
        title: "Transparent Communication",
        desc: "Clear processes and regular updates keep you informed at every step."
    },
    {
        title: "Timely Delivery",
        desc: "We value your time and ensure every project meets deadlines."
    },
    {
        title: "Ongoing Support",
        desc: "Continuous monitoring and support to maintain peak performance."
    }
];

const WhyChooseGrid = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {data.map((item, index) => (
                <motion.div
                    key={index}
                    className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
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

export default WhyChooseGrid;