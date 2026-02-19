import FadeSection from "../animations/FadeSection";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = ({
  title,
  subtitle,
  data,
  bg = "bg-gray-50",
}) => {
  return (
    <FadeSection>
      <section className={`py-24 ${bg}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {title}
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <TestimonialCard key={index} {...item} />
            ))}
          </div>

        </div>
      </section>
    </FadeSection>
  );
};

export default TestimonialSection;
