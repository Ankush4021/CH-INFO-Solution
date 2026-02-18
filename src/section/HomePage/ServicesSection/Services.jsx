import ServiceItem from "./ServiceItem";
import servicesData from "./servicesData";

const Services = () => {
    return (
        <section className="bg-white">

            {/* Header */}
            <div className="py-32 text-center px-6">
                <span className="uppercase text-blue-600 tracking-widest text-sm font-semibold">
                    Our Services
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mt-6 text-gray-900">
                    Complete IT Solutions Under One Roof
                </h2>
            </div>

            {servicesData.map((service, index) => (
                <ServiceItem key={index} service={service} />
            ))}

            {/* CTA */}
            <div className="py-32 text-center bg-gray-50">
                <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                    Looking For Reliable IT Support?
                </h3>
                <button className="px-10 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                    Get In Touch
                </button>
            </div>

        </section>
    );
};

export default Services;
