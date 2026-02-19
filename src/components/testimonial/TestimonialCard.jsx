const TestimonialCard = ({ name, company, message, rating, image }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <span
            key={i}
            className="text-yellow-400 text-lg group-hover:scale-110 transition"
          >
            ★
          </span>
        ))}
      </div>

      {/* Message */}
      <p className="text-gray-600 leading-relaxed mb-6">
        “{message}”
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
