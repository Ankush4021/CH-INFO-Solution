// sections/AboutPage/Hero/HeroStats.jsx

const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
];

const HeroStats = () => {
    return (
        <div className="flex gap-10 pt-6 border-t border-gray-200">

            {stats.map((item, index) => (
                <div key={index}>
                    <h3 className="text-2xl font-bold text-gray-900">
                        {item.number}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {item.label}
                    </p>
                </div>
            ))}

        </div>
    );
};

export default HeroStats;