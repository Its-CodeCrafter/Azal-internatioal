import { motion } from "framer-motion";

const Commercial = () => {
  return (
    <section className="min-h-screen bg-gray-50">

      <div className="relative h-[50vh] flex items-center justify-center text-white text-center">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative text-4xl md:text-5xl font-bold"
        >
          Commercial Solutions
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-gray-700 leading-relaxed mb-12">
          Durable and stylish flooring for corporate offices,
          workspaces, and business environments.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            Office Flooring
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            High Traffic Resistant
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            Corporate Customization
          </div>
        </div>
      </div>

    </section>
  );
};

export default Commercial;
