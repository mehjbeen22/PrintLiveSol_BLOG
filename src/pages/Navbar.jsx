import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between py-3 ">
        {/* Logo or Brand */}
        <Link to="/">
          <img
            src="https://i.ibb.co/Lr0FhXL/hp-logo-removebg-preview.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
        </Link>
        {/* Navigation Items */}
        <div className="flex space-x-8 text-lg text-gray-700  w-[50%] justify-between items-center ">
          <input
            type="text"
            placeholder="Search HP Support"
            className="border border-gray-300  rounded outline-none w-[80%] p-1"
          />
          <Link
            to="/account"
            className="bg-blue-500 px-3 py-1 text-white rounded text-center"
          >
            Sign in
          </Link>
          {/* <p className="hover:text-black transition duration-300">Explore</p>
          <p className="hover:text-black transition duration-300">Shop</p>
          <p className="hover:text-black transition duration-300">Support</p> */}
        </div>{" "}
      </div>

      {/* Navigation Links */}
      <ul
        className="flex flex-col sm:flex-row sm:space-x-8 bg-blue-500
       text-white py-3 px- sm:px-8"
      >
        <li>
          <Link
            to="/"
            className="hover:text-gray-300 cursor-pointer block py-2 sm:py-0"
          >
            Support Home
          </Link>
        </li>
        <li>
          <Link
            to="/sofware&drivers"
            className="hover:text-gray-300 cursor-pointer block py-2 sm:py-0"
          >
            Software and Drivers
          </Link>
        </li>
        <li>
          <Link
            to="/ "
            className="hover:text-gray-300 cursor-pointer block py-2 sm:py-0"
          >
            Bussiness Support
          </Link>
        </li>
        <li>
          <Link
            to="/account"
            className="hover:text-gray-300 cursor-pointer block py-2 sm:py-0"
          >
            My HP Account
          </Link>
        </li>

        {/* <li>
          <Link
            to="/privacypolicy"
            className="hover:text-gray-300 cursor-pointer block py-2 sm:py-0"
          >
            Privacy Policy
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
