// sections/AboutPage/Hero/Hero.jsx

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <HeroContent />

                    {/* Right Image */}
                    <HeroImage />

                </div>
            </div>
        </section>
    );
};

export default Hero;