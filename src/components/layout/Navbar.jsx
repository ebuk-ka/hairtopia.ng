import { useState } from "react";
import logo from "../../assets/images/Group 2.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
  { name: "Home", href: "#home" },
  { name: "Wigs", href: "#wigs" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];


  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto max-w-7xl px-6">
        {/* Main Navbar */}
        <div className="mt-4 flex items-center justify-between rounded-3xl bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg px-6 py-4">
          {/* Logo */}
          <img src={logo} alt="Hairtopia" className="h-16 w-auto" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-gray-800 font-medium">
              {links.map((link) => (
  <a
    key={link.name}
    href={link.href}
    className="relative cursor-pointer text-sm tracking-wide
    text-black/80 transition-all duration-500 ease-out
    hover:text-black
    after:content-['']
    after:absolute after:left-0 after:-bottom-2
    after:h-[1px] after:w-full after:bg-black
    after:scale-x-0 after:origin-right
    after:transition-transform after:duration-500
    hover:after:scale-x-100 hover:after:origin-left"
  >
    {link.name}
  </a>
))}



          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            <svg
              className="w-8 h-8 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen mt-3" : "max-h-0"
          }`}
        >
          <div className="rounded-3xl bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg px-6 py-6 flex flex-col gap-6">
          {links.map((link, index) => (
  <a
    key={link.name}
    href={link.href}
    className={`text-gray-800 font-medium text-lg transition-all duration-500
    ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    style={{ transitionDelay: `${index * 100}ms` }}
    onClick={() => setIsOpen(false)} // 👈 closes menu after click
  >
    {link.name}
  </a>
))}

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
