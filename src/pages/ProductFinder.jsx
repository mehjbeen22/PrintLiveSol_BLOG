import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const ProductFinder = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      navigate("/downloadDrivers"); // Redirect to /downloadDrivers
    } else {
      alert(
        "Please enter a valid product name, serial number, or product number."
      );
    }
  };

  return (
    <>
      <section className="mt-[8rem] flex justify-center items-center">
        <div className=" w-[80%] p-10 flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl leading-10 mb-4">
              We're here to help you set up your HP printer
            </h1>
            <p className="text-lg">
              Let's connect your printer to a Wi-Fi or wired network or to a
              computer using a USB cable, but first, we need to know your
              printer model.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/image/Printer_Setup_Landing.jpg"
              alt="Printer Setup"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="bg-[#f7f7f7] flex justify-center items-center py-10">
        <div className=" w-[80%] p-10 flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2 flex flex-col justify-center border-r-2 px-4 border-gray-400">
            <p className="text-lg font-semibold mb-4">
              Select your support need:
            </p>
            <label className="mb-2">
              <input
                type="radio"
                name="support"
                value="setup"
                onChange={handleOptionChange}
                className="mr-2"
              />
              Unpack, Setup New Printer
            </label>
            <label className="mb-4">
              <input
                type="radio"
                name="support"
                value="troubleshoot"
                onChange={handleOptionChange}
                className="mr-2"
              />
              Troubleshoot printer issues
            </label>

            <p className="text-lg font-semibold mb-4">
              Enter your serial number, product number or product name
            </p>

            <form className="flex gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Example: HP DeskJet 2632 All-in-One Printer"
                value={inputValue}
                onChange={handleInputChange}
                className="p-3 border border-gray-300 rounded-l-lg flex-grow"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-r-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Carousel
              showArrows
              autoPlay
              infiniteLoop
              showThumbs={false}
              className="w-full h-auto"
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
      <section className="flex justify-center items-center">
        <div className=" w-[80%] p-10 flex flex-col lg:flex-row gap-6">
          <div className="w-[50%]">
            <p>
              We’ve made it easy to download HP printer software to set up your
              printer. Enter your product name and we’ll get you the right
              printer setup software and drivers. We support all major desktop
              and mobile operating systems, including Windows, MacOS, iOS, and
              Android.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductFinder;
