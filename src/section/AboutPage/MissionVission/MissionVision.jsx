// sections/AboutPage/MissionVision/MissionVision.jsx

import MissionVisionHeader from "./MissionVisionHeader";
import MissionVisionCards from "./MissionVisionLayout";

const MissionVision = () => {
    return (
        <section className="bg-white py-32">
            <div className="max-w-6xl mx-auto px-6">
                <MissionVisionHeader />
                <MissionVisionCards />
            </div>
        </section>
    );
};

export default MissionVision;