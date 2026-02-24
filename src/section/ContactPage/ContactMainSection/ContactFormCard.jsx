import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import servicesData from "../../HomePage/ServicesSection/servicesData";

const ContactFormCard = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            name: form.name,
            email: form.email,
            company: form.company,
            service: form.service,
            message: form.message,
            phone: "",
            budget: ""
        };

        emailjs.send(
            "service_5a64f5r",
            "template_an2t7ro",
            templateParams,
            "6lPpv2YzZ75IJ5CDa"
        )
            .then(() => {
                setLoading(false);
                setSuccess(true);
                setForm({
                    name: "",
                    email: "",
                    company: "",
                    service: "",
                    message: "",
                });
            });
    };

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

            <form onSubmit={handleSubmit} className="space-y-6">

                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-blue-600 transition"
                />

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Business Email"
                    required
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-blue-600 transition"
                />

                <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-blue-600 transition"
                />

                <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
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
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-blue-600 transition"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-6 bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
                >
                    {loading ? "Sending..." : "Submit Inquiry"}
                </button>

                {success && (
                    <p className="text-green-600 text-sm text-center">
                        Inquiry sent successfully!
                    </p>
                )}
            </form>
        </motion.div>
    );
};

export default ContactFormCard;