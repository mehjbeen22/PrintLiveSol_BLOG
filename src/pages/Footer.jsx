import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-100 p-4 text-center">
      <p className="mt-4">
        <Link to="/privacypolicy">Privacy Policy</Link> || Copyright © 2024
        PrintLiveSol. All Rights Reserved.
      </p>
    </footer>
  );
}
