import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-sm text-gray-500 mb-10">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-red-500 font-medium">
           
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          About Us
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">

          <p>
            Azal International is manufacturing & exporting company dealing in
            Surgical Instruments and Medical Diagnostic Sets based in
            Sialkot - Pakistan.
          </p>

          <p>
            We offer a range of Medical Diagnostic Sets and Instruments
            which can be compared with the best in the world.
          </p>

          <p>
            Our core strength is our skilled workforce which utilizes
            cutting edge techniques including computer aided designing
            and imaging plus combination of cost effective production
            systems to create precisely engineered instruments, while
            our research and development team continuously strives to
            improve the specifications and performance of our product range.
          </p>

          <p>
            We aim to continue to be at the forefront of product development
            and to offer to our customers top notch quality products at
            competitive prices.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
