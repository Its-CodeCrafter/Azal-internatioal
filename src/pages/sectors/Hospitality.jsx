import { motion } from "framer-motion";

const Hospitality = () => {
  return (
    <section className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          alt="Hospitality"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Hospitality Solutions
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Premium flooring solutions for hotels & resorts worldwide
          </p>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Designed for Luxury Experiences
        </motion.h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Our hospitality flooring solutions are crafted to enhance the guest
          experience while maintaining durability and elegance. From grand
          hotel lobbies to private resort villas, our premium carpets and
          custom flooring solutions deliver unmatched comfort and style.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg mb-3">
              Custom Designs
            </h3>
            <p className="text-gray-600">
              Tailored solutions to match luxury hotel interiors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg mb-3">
              High Durability
            </h3>
            <p className="text-gray-600">
              Engineered for heavy foot traffic and long-lasting quality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg mb-3">
              Sustainable Materials
            </h3>
            <p className="text-gray-600">
              Eco-friendly materials meeting global sustainability standards.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:scale-105 transition">
            Request Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hospitality;
