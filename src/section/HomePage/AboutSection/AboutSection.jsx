import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutIntro from "./AboutIntro";
import AboutHighlights from "./AboutHighlights";
import AboutVisual from "./AboutVisual";
import FadeSection from "../../../components/animations/FadeSection";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // Intro fade
            gsap.from(".about-intro", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            // Image fade
            gsap.from(".about-visual", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            // Highlights stagger
            gsap.from(".about-card", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <FadeSection >
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
        </FadeSection>
    );
};

export default AboutSection;
