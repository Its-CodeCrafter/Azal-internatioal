import { motion } from "framer-motion";

const resources = [
  {
    title: "Premium Carpet Catalog 2026",
    type: "PDF Catalog",
  },
  {
    title: "Hospitality Flooring Guide",
    type: "Industry Insight",
  },
  {
    title: "Sustainability Report",
    type: "Company Report",
  },
];

const Library = () => {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-bold">
            Resource Library
          </h1>
          <p className="text-gray-600 mt-4">
            Access brochures, insights, and downloadable resources
          </p>
        </motion.div>

        {/* Resource Cards */}
        <div className="space-y-6">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div>
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {item.type}
                </p>
              </div>

              <button className="mt-4 sm:mt-0 bg-primary text-white px-5 py-2 rounded-lg hover:scale-105 transition">
                Download
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;
