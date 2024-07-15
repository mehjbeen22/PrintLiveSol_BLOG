import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PrintIcon from "@mui/icons-material/Print";
import MonitorIcon from "@mui/icons-material/Monitor";
import DevicesIcon from "@mui/icons-material/Devices";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { useNavigate } from "react-router-dom";

const ProductFinder = () => {
  const [printerName, setPrinterName] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setPrinterName(e.target.value);
  };

  const handleNextClick = () => {
    if (printerName.trim() !== "") {
      navigate("/downloadDrivers");
    } else {
      console.log("Input field is empty");
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 mt-20">
      <section className="py-8">
        <div className="bg-white mb-6">
          <div className="flex space-x-4 text-gray-700 mb-4">
            <span className="flex items-center justify-center w-8 h-8 bg-[#0096d5] text-white rounded-full font-semibold">
              1
            </span>
            <span className="font-semibold text-lg">Identify</span>
            <span className="text-xl">{">"}</span>
            <span className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-700 rounded-full font-semibold">
              2
            </span>
            <span className="font-semibold text-lg">Download</span>
            <span className="text-xl">{">"}</span>
            <span className="flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-700 rounded-full font-semibold">
              3
            </span>
            <span className="font-semibold text-lg">Install</span>
          </div>
          <div className="text-gray-600">
            Already have an HP account? Select from the products you own.
            <span className="text-[#0096d5] font-semibold cursor-pointer ml-2">
              Sign in / Create an account
            </span>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-black py-3">
        <h2 className="text-xl sm:text-2xl text-green-700 mb-4 md:mb-0">
          Welcome to HP Software and Drivers
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-700">Select a different product type:</p>
          <div className="flex justify-center space-x-4 mt-2 md:mt-0">
            <div className="text-[#0278AB] cursor-pointer">
              <PrintIcon fontSize="large" />
            </div>
            <div className="text-[#0278AB] cursor-pointer">
              <MonitorIcon fontSize="large" />
            </div>
            <div className="text-[#0278AB] cursor-pointer">
              <DevicesIcon fontSize="large" />
            </div>
            <div className="text-[#0278AB] cursor-pointer">
              <HeadsetMicIcon fontSize="large" />
            </div>
          </div>
        </div>
      </div>

      {/* Identify Printer Section */}
      <section className="flex flex-col lg:flex-row p-4 sm:p-8 gap-6 border-b border-black">
        <div className="mb-8 lg:pt-10 lg:w-[50%]">
          <h2 className="text-xl sm:text-2xl font-bold">
            Let's identify your printer
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Enter your serial number, product number or product name
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Example: HP OfficeJet 4630"
              className="w-full p-2 border border-gray-300 focus:outline-none"
              value={printerName}
              onChange={handleInputChange}
            />
            <button
              onClick={handleNextClick}
              className="px-4 py-2 bg-black text-white rounded"
            >
              NEXT
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="lg:w-[50%]">
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
      </section>

      {/* ------------------------------------------------------------ */}
      <section className="bg-white p-4 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto my-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img
              src="https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/swd/swd-banner-images/Background%20Product%20Image.png"
              alt="help_img"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
          <div className="flex flex-col justify-center p-6 bg-gray-100 rounded-lg shadow-sm w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0096d5] mb-4 text-center md:text-left">
              Need Windows 11 Help?
            </h2>
            <p className="text-gray-700 text-center md:text-left">
              Check on compatibility, upgrades, and available fixes from HP and
              Microsoft.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductFinder;
