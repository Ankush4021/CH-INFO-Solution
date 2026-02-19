const ServiceItem = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm 
    transition-transform duration-300 
    hover:-translate-y-2 transform-gpu">

      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className="w-full h-40 object-cover rounded-xl mb-6"
      />

      <h3 className="text-xl font-semibold mb-3">
        {service.title}
      </h3>

      <p className="text-gray-600">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceItem;
