const Footer = () => {
  return (
    <footer className="bg-darkBlue text-gray-400 py-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-16">
        <div>
          <h4 className="text-white text-2xl font-semibold mb-6">
            AZAL International
          </h4>
          <p>
            Premium carpets and flooring solutions worldwide.
          </p>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-4">Company</h5>
          <ul className="space-y-3">
            <li>About</li>
            <li>Careers</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-4">Products</h5>
          <ul className="space-y-3">
            <li>Collections</li>
            <li>Projects</li>
            <li>Sectors</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-4">Support</h5>
          <ul className="space-y-3">
            <li>Contact</li>
            <li>Export Inquiry</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
