import { Link } from "react-router-dom";

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Luxury Persian",
      description: "Handcrafted elegance with timeless beauty.",
      image:
        "https://images.unsplash.com/photo-1582582429416-6f1b5d6c2c0b",
    },
    {
      id: 2,
      title: "Modern Minimalist",
      description: "Clean lines and contemporary designs.",
      image:
        "https://images.unsplash.com/photo-1616627983905-7d3ad1a0a36c",
    },
    {
      id: 3,
      title: "Vintage Heritage",
      description: "Classic patterns inspired by tradition.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Page Title */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold">
            Our Collections
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our curated range of premium carpets designed
            to transform every space into a masterpiece.
          </p>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {collections.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {item.description}
                </p>

                <Link
                  to="/shop"
                  className="inline-block mt-4 text-primary font-medium hover:underline"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
