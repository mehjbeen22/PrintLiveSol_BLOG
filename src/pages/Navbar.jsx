import { Link } from "react-router-dom";
// import JivoChatWidget from "./JivochatWidget";

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between py-4">
        {/* Logo or Brand */}
        {/* <Link to="/">
          <img
            src="https://cdn.freebiesupply.com/images/large/2x/hewlett-packard-logo-black-and-white.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
        </Link> */}
        {/* Navigation Items */}
        <div className="flex space-x-8 text-lg text-gray-700">
          <p className="hover:text-black transition duration-300">Explore</p>
          <p className="hover:text-black transition duration-300">Shop</p>
          <p className="hover:text-black transition duration-300">Support</p>
        </div>
      </div>

      {/* Navigation Links */}
      <ul
        className="flex flex-col sm:flex-row sm:space-x-8 bg-black
       text-white py-4 px- sm:px-8"
      >
        <li>
          <Link
            to="/"
            className="hover:text-gray-300 cursor-pointer block py-2 sm:py-0"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/printeroffline"
            className="hover:text-gray-300 cursor-pointer block py-2 sm:py-0"
          >
            Printer Offline
          </Link>
        </li>
        <li>
          <Link
            to="/printersetupissue"
            className="hover:text-gray-300 cursor-pointer block py-2 sm:py-0"
          >
            Printer Setup
          </Link>
        </li>
        <li>
          <Link
            to="/scannersetup"
            className="hover:text-gray-300 cursor-pointer block py-2 sm:py-0"
          >
            Scanner Setup
          </Link>
        </li>

        <li>
          <Link
            to="/privacypolicy"
            className="hover:text-gray-300 cursor-pointer block py-2 sm:py-0"
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
