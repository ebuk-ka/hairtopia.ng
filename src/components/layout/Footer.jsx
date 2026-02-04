import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Hairtopia</h2>
          <p className="text-gray-600">
            Premium wigs and hair services for every style. Look elegant, feel confident.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-black transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/wigs" className="hover:text-black transition-colors duration-300">Wigs</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-black transition-colors duration-300">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-black transition-colors duration-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium mb-4">Contact</h3>
          <p className="text-gray-600 mb-2">Email: hello@hairtopia.com</p>
          <p className="text-gray-600 mb-2">Phone: +234 808 371 4455</p>
          <p className="text-gray-600">Address: Port Harcourt, Nigeria</p>
        </div>

        {/* Socials */}
       <div className="flex items-center gap-4">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/hair_topia.ng" 
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-black transition-colors duration-300 text-2xl p-2 rounded-full hover:bg-gray-100"
  >
    <FaInstagram />
  </a>


  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@hair_topia.ng" 
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-black transition-colors duration-300 text-2xl p-2 rounded-full hover:bg-gray-100"
  >
    <FaTiktok />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/23409161635450" 
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-black transition-colors duration-300 text-2xl p-2 rounded-full hover:bg-gray-100"
  >
    <FaWhatsapp />
  </a>
</div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 py-4 mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Hairtopia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
