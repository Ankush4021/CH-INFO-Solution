import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutIntro from "./AboutIntro";
import AboutHighlights from "./AboutHighlights";
import AboutVisual from "./AboutVisual";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // Intro fade
            gsap.from(".about-intro", {
                y: 40,
                opacity: 0,
                scale: 0.98,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".about-intro",
                    start: "top 85%",
                    toggleActions: "play reverse play reverse",
                },
            });

            // Image fade
            gsap.from(".about-visual", {
                y: 60,
                opacity: 0,
                duration: 1.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".about-visual",
                    start: "top 85%",
                    toggleActions: "play reverse play reverse",
                },
            });

            // Highlights stagger
            gsap.from(".about-card", {
                y: 50,
                opacity: 0,
                duration: 2,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".about-card",
                    start: "top 90%",
                    toggleActions: "play reverse play reverse",
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-32 px-6">
            <div className="max-w-7xl mx-auto space-y-24">

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="about-intro">
                        <AboutIntro />
                    </div>

                    <div className="about-visual">
                        <AboutVisual />
                    </div>
                </div>

                <div className="about-card">
                    <AboutHighlights />
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
