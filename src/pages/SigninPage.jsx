import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (email && password) {
      // Perform sign in logic here, then navigate to the home page
      navigate("/");
    } else {
      alert("Please fill in both email and password.");
    }
  };

  return (
    <div className="mt-10 min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-lg p-8 text-center">
        <p className="text-xl text-gray-700 ">
          Connect with your printers and solve issues quickly.
        </p>
      </div>
      <div className="w-full max-w-screen-lg flex justify-center ">
        <div className="p-8 bg-white mt-4 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-[#0096d5]">Sign In</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-[#0096d5] text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-[#0096d5] text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#0096d5] hover:bg-blue-600 text-white font-bold py-2   rounded focus:outline-none focus:shadow-outline px-4"
                type="button"
                onClick={handleSignIn}
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-[#0096d5] hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
