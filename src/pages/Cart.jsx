import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Cart = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">

      <ShoppingBag size={80} className="text-gray-300 mb-6" />

      <h2 className="text-3xl font-bold mb-4">
        Your cart is empty
      </h2>

      <p className="text-gray-500 mb-8">
        Looks like you haven't added anything to your cart yet.
      </p>

      <Link
        to="/"
        className="bg-primary text-white px-6 py-3 rounded-lg"
      >
        Continue Shopping
      </Link>
    </section>
  );
};

export default Cart;
