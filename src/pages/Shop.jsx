import { Link } from "react-router-dom";

const Shop = () => {
  const products = [
    { id: 1, name: "Luxury Persian Rug", price: "$299" },
    { id: 2, name: "Modern Minimal Carpet", price: "$199" },
    { id: 3, name: "Vintage Heritage Rug", price: "$249" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Premium Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1582582429416-6f1b5d6c2c0b"
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-500 mt-2">{product.price}</p>

                <Link
                  to="/cart"
                  className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
