import { motion } from "framer-motion";

const locations = [
  { country: "UAE", city: "Dubai" },
  { country: "UK", city: "London" },
  { country: "USA", city: "New York" },
  { country: "Germany", city: "Frankfurt" },
  { country: "India", city: "Mumbai" },
];

const GlobalPresence = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-bold">
            Global Presence
          </h1>
          <p className="text-gray-600 mt-4">
            Delivering premium flooring solutions worldwide
          </p>
        </motion.div>

        {/* Map Section */}
        <div className="mb-16">
          <img
            src="https://images.unsplash.com/photo-1502920917128-1aa500764b29"
            alt="World Map"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="font-semibold">
                {location.country}
              </h3>
              <p className="text-gray-500 mt-2">
                {location.city}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
