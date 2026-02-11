const Industries = () => {
  const sectors = [
    "Hospitality",
    "Residential",
    "Commercial",
    "Exhibition",
    "Retail",
  ];

  return (
    <section className="py-20 bg-darkBlue text-white text-center">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Industries We Serve
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition"
            >
              {sector}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
