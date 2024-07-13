import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Use the correct icons for v2

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between py-3">
        {/* Logo or Brand */}
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Link to="/">
            <img
              src="https://i.ibb.co/Lr0FhXL/hp-logo-removebg-preview.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
          </Link>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="hidden sm:flex space-x-8 text-lg text-gray-700 w-full sm:w-[50%] justify-between items-center mt-3 sm:mt-0">
          <input
            type="text"
            placeholder="Search HP Support"
            className="border border-gray-300 rounded outline-none w-[80%] p-1"
          />
          <Link
            to="/account"
            className="bg-[#0096d5] px-3 py-1 text-white rounded text-center"
          >
            Sign in
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`sm:flex ${
          isOpen ? "block" : "hidden"
        } bg-[#0096d5] text-white`}
      >
        <ul className="flex flex-col sm:flex-row sm:space-x-8 py-3 px-4 sm:px-8">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 cursor-pointer block py-2 sm:py-0"
              onClick={toggleMenu} // Close menu on link click
            >
              Support Home
            </Link>
          </li>
          <li>
            <Link
              to="/software&drivers"
              className="hover:text-gray-300 cursor-pointer block py-2 sm:py-0"
              onClick={toggleMenu} // Close menu on link click
            >
              Software and Drivers
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 cursor-pointer block py-2 sm:py-0"
              onClick={toggleMenu} // Close menu on link click
            >
              Business Support
            </Link>
          </li>
          <li>
            <Link
              to="/account"
              className="hover:text-gray-300 cursor-pointer block py-2 sm:py-0"
              onClick={toggleMenu} // Close menu on link click
            >
              My HP Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
