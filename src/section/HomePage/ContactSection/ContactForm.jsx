import { useState } from "react";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
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

        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setForm({ name: "", email: "", message: "" });

            setTimeout(() => setSuccess(false), 3000);
        }, 1500);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gray-50 border border-gray-300 p-10 rounded-3xl shadow-xl space-y-8 transition-all duration-300 hover:shadow-2xl"
        >
            {/* Name */}
            <div>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-gray-400 focus:border-indigo-600 outline-none py-3 text-gray-900 placeholder-gray-400 transition-all"
                />
            </div>

            {/* Email */}
            <div>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-gray-400 focus:border-indigo-600 outline-none py-3 text-gray-900 placeholder-gray-400 transition-all"
                />
            </div>

            {/* Message */}
            <div>
                <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project"
                    className="w-full bg-transparent border-b border-gray-400 focus:border-indigo-600 outline-none py-3 text-gray-900 placeholder-gray-400 resize-none transition-all"
                ></textarea>
            </div>

            {/* Button */}
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-300 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
                {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
                <p className="text-green-600 text-sm text-center">
                    Message sent successfully!
                </p>
            )}
        </form>
    );
};

export default ContactForm;
