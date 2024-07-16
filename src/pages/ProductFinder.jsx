import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom"; // Updated import
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel styles

const ProductFinder = () => {
  const [selectedOption, setSelectedOption] = useState("setup");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate(); // Updated to useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption && inputValue.trim()) {
      navigate("/downloadDrivers"); // Updated to navigate
    }
  };

  return (
    <main className="bg-gray-100">
      {/* FIRST Section */}
      <section className="mt-[60px] py-10 bg-white">
        <div className="flex flex-col lg:flex-row items-center px-14">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-2xl mb-4">
              We're here to help you set up your HP printer
            </h1>
            <p className="text-gray-700 text-lg lg:text-xl">
              Let's connect your printer to a Wi-Fi or wired network or to a{" "}
              <br />
              computer using a USB cable. But first, we need to know your
              printer model.
            </p>
          </div>
          <div>
            <img
              src="https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/image/Printer_Setup_Landing.jpg"
              alt="printersetup"
              className="h-[15rem]"
            />
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="bg-gray-100 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center px-14">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <p className="text-lg font-semibold text-gray-800">
              Select your support need:
            </p>
            <div className="mt-4">
              <label className="block text-gray-700">
                <input
                  type="radio"
                  name="support"
                  value="setup"
                  checked={selectedOption === "setup"}
                  onChange={() => setSelectedOption("setup")}
                  className="mr-2"
                />
                Unpack, Setup New Printer
              </label>
              <label className="block mt-2 text-gray-700">
                <input
                  type="radio"
                  name="support"
                  value="troubleshoot"
                  checked={selectedOption === "troubleshoot"}
                  onChange={() => setSelectedOption("troubleshoot")}
                  className="mr-2"
                />
                Troubleshoot printer issues
              </label>
            </div>

            <p className="text-lg font-semibold text-gray-800 mt-6">
              Enter your serial number, product number or product name
            </p>
            <form className="mt-4 flex gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Example: HP DeskJet 2632 All-in-One Printer"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="p-3 border border-gray-300 rounded-l-lg flex-grow lg:flex-grow-0 lg:w-2/3"
              />
              <button
                type="submit"
                className={`py-3 px-6 rounded-r-lg ${
                  selectedOption && inputValue.trim()
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!selectedOption || !inputValue.trim()}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <Carousel
              showArrows
              autoPlay
              infiniteLoop
              showThumbs={false}
              className="rounded-lg shadow-lg"
            >
              <div>
                <img
                  src="https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/p-finder/Laserjet.png"
                  alt="HP Laserjet Printer"
                />
              </div>
              <div>
                <img
                  src="https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/p-finder/NSLaser.png"
                  alt="HP NS Laser Printer"
                />
              </div>
              <div>
                <img
                  src="https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/p-finder/Deskjet.png"
                  alt="HP Deskjet Printer"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700">
            We’ve made it easy to download HP printer software to set up your
            printer. Enter your product name and we’ll get you the right printer
            setup software and drivers. We support all major desktop and mobile
            operating systems, including Windows, MacOS, iOS, and Android.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ProductFinder;
