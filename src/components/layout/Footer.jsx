import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Hairtopia</h2>
          <p className="text-gray-600 leading-relaxed">
            Premium wigs and hair services crafted for confidence, elegance, and beauty.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-600">
            <li>
              <a href="#home" className="hover:text-black transition">
                Home
              </a>
            </li>
            <li>
              <a href="#wigs" className="hover:text-black transition">
                Wigs
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-black transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-black transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium mb-4">Contact</h3>
          <p className="text-gray-600 mb-2">Email: emmanuellairuoma@gmail.com</p>
          <p className="text-gray-600 mb-2">Phone: +234 808 371 4455</p>
          <p className="text-gray-600">Port Harcourt, Nigeria</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-medium mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/hair_topia.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black text-2xl p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@hair_topia.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black text-2xl p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaTiktok />
            </a>

            <a
              href="https://wa.me/23409161635450"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black text-2xl p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Hairtopia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
