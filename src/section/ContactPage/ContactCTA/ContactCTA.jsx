import { motion } from "framer-motion";

const ContactCTA = () => {
    return (
        <section className="py-24 bg-blue-900 text-white text-center">
            <div className="container mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-6"
                >
                    Ready to Secure & Upgrade Your IT Infrastructure?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-8 text-blue-100"
                >
                    Get in touch with CH Info Solution today and let’s build reliable technology for your business.
                </motion.p>

                <motion.a
                    href="tel:+918377996001"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
                >
                    Call Now
                </motion.a>

            </div>
        </section>
    );
};

export default ContactCTA;