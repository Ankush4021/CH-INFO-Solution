// sections/AboutPage/Overview/Overview.jsx

import OverviewIntro from "./OverviewIntro";
import OverviewGrid from "./OverviewGrid";

const Overview = () => {
    return (
        <section className="bg-white py-32">
            <div className="max-w-5xl mx-auto px-6 text-center">

                <OverviewIntro />
                <OverviewGrid />

            </div>
        </section>
    );
};

export default Overview;