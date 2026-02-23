import { motion } from "framer-motion";

const trustItems = [
    {
        title: "Quick Response",
        desc: "We respond to all inquiries within 24 hours.",
    },
    {
        title: "Certified Technicians",
        desc: "Experienced professionals handling every project.",
    },
    {
        title: "On-Site & Remote Support",
        desc: "Flexible support solutions tailored to your needs.",
    },
];

const ContactTrust = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-10 text-center">

                    {trustItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="p-6"
                        >
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ContactTrust;