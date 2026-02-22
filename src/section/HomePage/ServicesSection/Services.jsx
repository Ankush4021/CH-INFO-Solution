import ServiceItem from "./ServiceItem";
import servicesData from "./servicesData";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';



gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".services-header", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".services-header",
                    start: "top 80%",
                },
            });

            gsap.from(".service-item", {
                y: 50,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="services"
            className="bg-white py-24"
        >
            {/* Header */}
            <div className="services-header text-center px-6 mb-20">
                <span className="uppercase text-blue-600 tracking-widest text-sm font-semibold">
                    Our Services
                </span>

                <h2 className="text-4xl md:text-6xl font-bold mt-6 text-gray-900">
                    Complete IT Solutions Under One Roof
                </h2>
            </div>

            {/* Services List */}
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-item">
                        <ServiceItem service={service} />
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-10 py-14 text-center bg-gray-50">
                <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                    Looking For Reliable IT Support?
                </h3>

                <Link
                    to="/contact"
                    className="px-10 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform duration-300 hover:scale-105">
                    Get In Touch
                </Link>
            </div>
        </section>
    );
};

export default Services;
