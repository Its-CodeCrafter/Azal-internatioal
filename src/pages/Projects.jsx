import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Grand Hotel Dubai",
      location: "Dubai, UAE",
      category: "Hospitality",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      id: 2,
      title: "Corporate Plaza",
      location: "London, UK",
      category: "Commercial",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    },
    {
      id: 3,
      title: "Luxury Residence",
      location: "New York, USA",
      category: "Residential",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
  ];

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
          <h1 className="text-4xl font-bold">Featured Projects</h1>
          <p className="text-gray-600 mt-4">
            Showcasing our finest installations worldwide
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 text-sm rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {project.location}
                </p>

                <button className="mt-4 text-primary font-medium hover:underline">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
