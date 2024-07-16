import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">About Us</h3>
          <ul>
            <li>About Us</li>

            <li>Investor relations</li>
            <li>Sustainable impact</li>
            <li>Press center</li>
            <li>The Garage</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Ways to Buy</h3>
          <ul>
            <li>Shop online</li>

            <li>Find a reseller</li>
            <li>Authorized service providers</li>
            <li>Check repair status</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul>
            <Link to="/privacypolicy">Privacy Policy</Link>
            <li>Download drivers</li>
            <li>Support & troubleshooting</li>
            <li>Community</li>
            <li>Register your product</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        &copy; {new Date().getFullYear()} PrinterLiveSol. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-gray-100 p-4 text-center">
//       <p className="mt-4">
//         <Link to="/privacypolicy">Privacy Policy</Link> || Copyright © 2024
//         PrintLiveSol. All Rights Reserved.
//       </p>
//     </footer>
//   );
// }
