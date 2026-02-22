import servicesData from "../../HomePage/ServicesSection/servicesData";
import ServiceItem from "./ServiceItem";

const ServicesShowcase = () => {
    return (
        <section className="bg-white py-4">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* SEO Friendly Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black">
                        Our Professional IT Services
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                        We provide comprehensive IT support, maintenance,
                        and infrastructure solutions tailored for businesses
                        of all sizes.
                    </p>
                </div>

                {/* Services List */}
                <div className="space-y-28">
                    {servicesData.map((service, index) => (
                        <ServiceItem
                            key={index}
                            service={service}
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </div>

                {/* Bottom Divider */}
                <div className="mt-20 border-t border-gray-100"></div>
            </div>
        </section>
    );
};

export default ServicesShowcase;