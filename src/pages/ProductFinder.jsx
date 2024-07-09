import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PrintIcon from '@mui/icons-material/Print';
import MonitorIcon from '@mui/icons-material/Monitor';
import DevicesIcon from '@mui/icons-material/Devices';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { Link } from 'react-router-dom';

const ProductFinder = () => {
  const [printerName, setPrinterName] = useState('');

  const handleInputChange = (e) => {
    setPrinterName(e.target.value);
  };

  const canRedirect = printerName.trim() !== '';

  return (
    <div>
      <div className="p-6">
        {/* Welcome Section */}
        <div className="flex justify-between items-center border-b border-black p-3">
          <h2 className="text-2xl text-green-600">
            Welcome to HP Software and Drivers
          </h2>
          <div className="flex justify-center items-center gap-10">
            <p className="text-gray-700">Select a different product type:</p>
            <div className="flex justify-center space-x-4 mt-4">
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
        <section className="flex p-8 gap-10 border-b border-black">
          <div className="mb-8 pt-10 w-[50%]">
            <h2 className="text-2xl font-bold">Let's identify your printer</h2>
            <p className="text-lg text-gray-700 mt-2">
              Enter your serial number, product number or product name
            </p>
            <div className="mt-4 flex gap-3">
              <input
                type="text"
                placeholder="Example: HP OfficeJet 4630"
                className="w-full p-2 border border-gray-300 focus:outline-none"
                value={printerName}
                onChange={handleInputChange}
              />
              {canRedirect && (
                <Link
                  to="/downloadDrivers"
                  className="px-2 py-1 bg-black text-white"
                >
                  NEXT
                </Link>
              )}
            </div>
          </div>

          {/* Carousel Section */}
          <div className="w-[50%]">
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
      </div>
    </div>
  );
};

export default ProductFinder;
