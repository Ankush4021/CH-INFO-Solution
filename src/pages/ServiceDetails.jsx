import { useParams } from "react-router-dom";
import { useEffect } from "react";
import servicesData from "../section/HomePage/ServicesSection/servicesData";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
    const { slug } = useParams();

    const service = servicesData.find(
        (item) => item.slug === slug
    );

    useEffect(() => {
        if (service) {
            document.title = service.metaTitle;

            const metaDescription = document.querySelector(
                'meta[name="description"]'
            );

            if (metaDescription) {
                metaDescription.setAttribute(
                    "content",
                    service.metaDescription
                );
            }
        }
    }, [service]);

    if (!service) {
        return <h2 className="text-center mt-20">Service Not Found</h2>;
    }

    return (
        <section className="py-20 px-6 max-w-5xl mx-auto">

            <img
                src={service.image}
                alt={service.metaTitle}
                className="w-full h-80 object-cover rounded-xl mb-10"
            />

            <h1 className="text-4xl font-bold mb-6">
                {service.title}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {service.description}
            </p>

            <div className="bg-blue-50 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-semibold mb-4">
                    Need This Service?
                </h3>

                <Link
                    to="/contact"
                    className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                    Get Free Consultation
                </Link>
            </div>

        </section>
    );
};

export default ServiceDetails;