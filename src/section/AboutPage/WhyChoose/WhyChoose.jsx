// sections/AboutPage/WhyChoose/WhyChoose.jsx

import WhyChooseHeader from "./WhyChooseHeader";
import WhyChooseGrid from "./WhyChooseGrid";

const WhyChoose = () => {
    return (
        <section className="bg-gray-50 py-32">
            <div className="max-w-6xl mx-auto px-6">

                <WhyChooseHeader />
                <WhyChooseGrid />

            </div>
        </section>
    );
};

export default WhyChoose;