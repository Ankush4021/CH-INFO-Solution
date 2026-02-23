import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  return (
    <article
      className="bg-white p-8 rounded-2xl shadow-sm 
      transition-all duration-300 
      hover:-translate-y-2 hover:shadow-lg transform-gpu"
    >
      <Link to={`/services/${service.slug}`}>

        <img
          src={service.image}
          alt={service.metaTitle}
          loading="lazy"
          className="w-full h-44 object-cover rounded-xl mb-6"
        />

        <h3 className="text-xl font-semibold mb-3 text-gray-900">
          {service.title}
        </h3>

        <p className="text-gray-600 mb-4">
          {service.description}
        </p>

        <span className="text-blue-600 font-medium">
          Learn More →
        </span>

      </Link>
    </article>
  );
};

export default ServiceItem;