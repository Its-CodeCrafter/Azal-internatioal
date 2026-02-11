const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600121848594-d8644e57abab')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      <div className="relative text-center text-white px-6">
        <h2 className="text-6xl font-bold leading-tight">
          Crafting statement floors for the world's most refined interiors.
        </h2>

        <p className="mt-6 text-lg text-gray-200">
          Crafting World-Class Carpets
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="bg-primary px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
            Explore Collections
          </button>
                  
           <button className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition">
            Connect Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
