import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const ServiceItem = ({ service }) => {
    const itemRef = useRef(null);

    useLayoutEffect(() => {
        const el = itemRef.current;

        gsap.fromTo(
            el.querySelector(".content"),
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                },
            }
        );

        gsap.fromTo(
            el.querySelector(".image"),
            { scale: 1.2 },
            {
                scale: 1,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <div
            ref={itemRef}
            className="min-h-screen flex items-center sticky top-0 bg-white border-b border-gray-200"
        >
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 px-6 md:px-12 py-24">

                {/* Left Content */}
                <div className="content flex flex-col justify-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {service.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {service.description}
                    </p>

                    <div className="flex gap-4 text-sm text-gray-500">
                        <span className="px-4 py-2 bg-gray-100 rounded-full">
                            On-site Support
                        </span>
                        <span className="px-4 py-2 bg-gray-100 rounded-full">
                            Fast Response
                        </span>
                        <span className="px-4 py-2 bg-gray-100 rounded-full">
                            Trusted Service
                        </span>
                    </div>
                </div>

                {/* Right Image */}
                <div className="overflow-hidden rounded-3xl shadow-xl image">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[450px] object-cover"
                    />
                </div>

            </div>
        </div>
    );
};

export default ServiceItem;
