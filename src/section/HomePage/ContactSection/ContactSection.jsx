import FadeSection from "../../../components/animations/FadeSection";
import AnimatedHeading from "../../../components/ui/AnimatedHeading";
import ReusableContactForm from './../../../components/ReusableContactForm';

const ContactSection = () => {
    return (
        <FadeSection>
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Content */}
                    <div>
                        <p className="text-indigo-600 uppercase tracking-widest text-sm mb-4 font-semibold">
                            Contact Us
                        </p>

                        <AnimatedHeading>
                            <p className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                                Let's Build Something
                                <span className="block text-indigo-600 mt-2">
                                    Extraordinary Together
                                </span>
                            </p>
                        </AnimatedHeading>

                        <p className="mt-6 text-gray-600 max-w-md leading-normal">
                            Have a project in mind? Fill out the form and our team will
                            get back to you within 24 hours.
                        </p>
                    </div>

                    {/* Form */}
                    <ReusableContactForm variant="home" />

                </div>
            </section>
        </FadeSection>
    );
};

export default ContactSection;
