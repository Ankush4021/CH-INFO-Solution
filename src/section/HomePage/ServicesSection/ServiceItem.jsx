import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceItem = ({ service, index }) => {
    const itemRef = useRef(null);

    useLayoutEffect(() => {
        const el = itemRef.current;

        const ctx = gsap.context(() => {
            gsap.from(".content", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 75%",
                },
            });

            gsap.from(".imageWrapper img", {
                scale: 1.15,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                },
            });
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={itemRef}
            className={`min-h-screen flex items-center sticky top-0 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } border-b`}
        >
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 px-6 md:px-12 py-24">

                {/* Content */}
                <div className="content flex flex-col justify-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {service.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {service.description}
                    </p>

                    <button className="w-fit px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                        Learn More
                    </button>
                </div>

                {/* Image */}
                <div className="imageWrapper overflow-hidden rounded-3xl shadow-2xl">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[450px] object-cover transition-transform duration-700 hover:scale-110"
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
