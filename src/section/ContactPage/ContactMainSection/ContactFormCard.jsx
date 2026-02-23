import { motion } from "framer-motion";
import servicesData from "../../HomePage/ServicesSection/servicesData";

const ContactFormCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-12"
        >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">
                Send a Message
            </h3>

            <form className="space-y-6">

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-blue-600 transition"
                />

                <input
                    type="email"
                    placeholder="Business Email"
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-blue-600 transition"
                />

                <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-blue-600 transition"
                />

                <select
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-blue-600 transition bg-transparent"
                >
                    <option value="">Select Service</option>

                    {servicesData.map((service, index) => (
                        <option key={index} value={service.title}>
                            {service.title}
                        </option>
                    ))}
                </select>

                <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-blue-600 transition"
                />

                <button
                    type="submit"
                    className="w-full mt-6 bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
                >
                    Submit Inquiry
                </button>

            </form>
        </motion.div>
    );
};

export default ContactFormCard;