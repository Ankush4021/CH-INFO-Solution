import { motion } from "framer-motion";

const MissionVisionLayout = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-16 mt-20 items-stretch">

            {/* LEFT - Mission Big Block */}
            <motion.div
                className="bg-blue-600 text-white p-12 rounded-3xl flex flex-col justify-between"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div>
                    <h3 className="text-3xl font-semibold mb-6">
                        Our Mission
                    </h3>

                    <p className="text-blue-100 text-lg leading-relaxed">
                        To deliver innovative, reliable, and scalable IT solutions 
                        that empower businesses to operate efficiently and 
                        achieve sustainable growth.
                    </p>
                </div>

                <div className="mt-10 text-blue-200 text-sm uppercase tracking-widest">
                    Driven by Innovation & Performance
                </div>
            </motion.div>


            {/* RIGHT - Vision + Core Values */}
            <motion.div
                className="space-y-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
            >
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        Our Vision
                    </h3>

                    <p className="text-gray-600 text-lg">
                        To become a trusted technology partner recognized for delivering 
                        excellence, innovation, and measurable impact across industries.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                    {["Integrity", "Innovation", "Client Commitment", "Excellence"].map((item, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gray-50 rounded-2xl border border-gray-100"
                        >
                            <h4 className="font-medium text-gray-900">
                                {item}
                            </h4>
                        </div>
                    ))}
                </div>
            </motion.div>

        </div>
    );
};

export default MissionVisionLayout;