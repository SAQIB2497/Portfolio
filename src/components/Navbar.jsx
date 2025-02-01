import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import mypic from "../../public/my_pic.jpg";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home", to: "home", offset: -100 },
    { id: 2, text: "About", to: "about", offset: -100 },
    { id: 3, text: "Projects", to: "projects", offset: -100 },
    { id: 4, text: "Contact", link: "mailto:saqiburrehman75@gmail.com" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#242424] text-[#dadada] shadow-lg">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 flex items-center justify-between">
        {/* Branding */}
        <div className="flex items-center space-x-3">
          <img
            className="h-12 w-12 rounded-full border-2 border-gray-700"
            src={mypic}
            alt="Profile of Saqib"
          />
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl cursor-pointer">
              Saqi<span className="text-teal-400">b</span>
            </h1>
            <p className="text-sm text-gray-400">Web Developer</p>
          </div>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, text, to, link, offset }) => (
            <li key={id} className="cursor-pointer hover:text-teal-400 transition-colors duration-300">
              {link ? (
                <a href={link}>{text}</a>
              ) : (
                <ScrollLink
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={500}
                >
                  {text}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenu(!menu)} aria-label={menu ? "Close menu" : "Open menu"} className="focus:outline-none">
            {menu ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {menu && (
        <div className="md:hidden bg-gray-900">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
            {navItems.map(({ id, text, to, link, offset }) => (
              <li key={id} onClick={() => setMenu(false)} className="font-medium cursor-pointer hover:text-teal-400 transition-colors duration-300">
                {link ? (
                  <a href={link}>{text}</a>
                ) : (
                  <ScrollLink
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    {text}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;