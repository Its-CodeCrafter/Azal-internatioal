import { motion } from "framer-motion";

const Residential = () => {
  return (
    <section className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center text-white text-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative text-4xl md:text-5xl font-bold"
        >
          Residential Solutions
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-gray-700 leading-relaxed mb-12">
          Elegant and comfortable flooring solutions designed to enhance
          modern homes, apartments, and luxury residences.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            Luxury Interiors
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            Custom Carpets
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            Long-lasting Comfort
          </div>
        </div>
      </div>

    </section>
  );
};

export default Residential;
