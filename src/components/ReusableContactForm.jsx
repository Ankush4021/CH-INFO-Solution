import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const ReusableContactForm = ({ variant = "home", services = [] }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
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

        const templateParams = { ...form };

        emailjs
            .send(
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
                    phone: "",
                    service: "",
                    budget: "",
                    message: "",
                });
                setTimeout(() => setSuccess(false), 3000);
            })
            .catch(() => {
                setLoading(false);
                alert("Something went wrong.");
            });
    };

    const inputBase =
        "w-full bg-transparent border-b border-gray-400 focus:border-indigo-600 outline-none py-3 transition-all duration-300";

    /* ---------------- HOME VARIANT ---------------- */

    if (variant === "home") {
        return (
            <form onSubmit={handleSubmit} className="space-y-6 px-4">

                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className={inputBase}
                />

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className={inputBase}
                />

                <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Mobile Number"
                    className={inputBase}
                />

                <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className={inputBase}
                >
                    <option value="">Project Budget (Optional)</option>
                    <option value="5k-10k">₹5k - ₹10k</option>
                    <option value="10k-25k">₹10k - ₹25k</option>
                    <option value="25k-50k">₹25k - ₹50k</option>
                    <option value="50k+">₹50k+</option>
                </select>

                <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    className={`${inputBase} resize-none`}
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl transition-all duration-300"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                    <p className="text-green-600 text-center text-sm">
                        Message sent successfully!
                    </p>
                )}
            </form>
        );
    }

    /* ---------------- CONTACT VARIANT (FRAMER) ---------------- */

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-300 p-10 rounded-3xl shadow-xl space-y-8"
        >
            <motion.input variants={item} type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" className={inputBase} />

            <motion.input variants={item} type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Your Email" className={inputBase} />

            <motion.input variants={item} type="tel" name="phone" value={form.phone} onChange={handleChange} required pattern="[0-9]{10}" maxLength="10" placeholder="Mobile Number" className={inputBase} />

            <motion.select variants={item} name="service" value={form.service} onChange={handleChange} className={inputBase}>
                <option value="">Select Service</option>
                {services.map((service, index) => (
                    <option key={index} value={service.title}>
                        {service.title}
                    </option>
                ))}
            </motion.select>

            <motion.textarea variants={item} name="message" rows="4" value={form.message} onChange={handleChange} required placeholder="Tell us about your project" className={`${inputBase} resize-none`} />

            <motion.button variants={item} type="submit" disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl transition-all duration-300">
                {loading ? "Sending..." : "Send Message"}
            </motion.button>

            <AnimatePresence>
                {success && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-green-600 text-center text-sm"
                    >
                        Message sent successfully!
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.form>
    );
};

export default ReusableContactForm;