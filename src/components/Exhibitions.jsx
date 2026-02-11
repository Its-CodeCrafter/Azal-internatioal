const Exhibitions = () => {
  const events = [
    "Domotex 2026",
    "Heimtextil 2026",
    "Index Dubai 2026",
  ];

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h3 className="text-5xl font-bold mb-16">
          Upcoming Exhibitions
        </h3>

        <div className="grid md:grid-cols-3 gap-12">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-primary to-blue-900 text-white p-10 rounded-2xl shadow-xl"
            >
              <h4 className="text-2xl font-semibold">{event}</h4>
              <p className="mt-4 text-gray-200">
                International Trade Exhibition
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;
