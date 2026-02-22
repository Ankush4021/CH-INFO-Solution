import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const ServicesCTA = () => {
    return (
        <section className="py-14 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-black">
                        Ready to Strengthen Your IT Infrastructure?
                    </h2>

                    <p className="mt-6 text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
                        Partner with our expert IT team to ensure seamless operations,
                        proactive maintenance, and scalable technology solutions
                        tailored for your business growth.
                    </p>

                    <div className="mt-10 flex justify-center gap-4 flex-wrap">
                        <a
                            href="/contact"
                            className="px-8 py-3 bg-blue-600 text-white text-sm rounded-lg hover:bg-black transition duration-300"
                        >
                            Get Free Consultation
                        </a>

                        <a
                            href="tel:+918377996001"
                            className="px-8 py-3 border border-gray-300 text-sm rounded-lg hover:border-black hover:text-black transition duration-300"
                        >
                            Call Our Team
                        </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default ServicesCTA;