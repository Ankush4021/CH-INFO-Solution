import { motion } from "framer-motion";

const ContactSidePanel = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-12 flex flex-col justify-center"
        >
            <h2 className="text-4xl font-bold mb-6 leading-tight">
                Let's Talk About Your Project
            </h2>

            <p className="text-blue-100 mb-10">
                Whether you need a website, app, or IT solution — our team is ready to help.
            </p>

            <div className="space-y-6 text-lg">

                <div>
                    <p className="text-blue-200 text-sm">Email</p>
                    <p>mohitbeniwal94636@gmail.com</p>
                    <p>dhruvbeniwal2314@gmail.com</p>
                </div>

                <div>
                    <p className="text-blue-200 text-sm">Phone</p>
                    <p>+91 8377996001</p>
                    <p>+91 7053926977</p>
                </div>

                <div>
                    <p className="text-blue-200 text-sm">Location</p>
                    <p>Faridabad, Haryana </p>
                    <p>India</p>
                </div>

            </div>
        </motion.div>
    );
};

export default ContactSidePanel;