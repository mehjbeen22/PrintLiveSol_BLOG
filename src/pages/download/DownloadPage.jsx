import React, { useState } from 'react';
import LoaderBar from './LoaderBar';

const DownloadPage = () => {
  const [isLoader, setIsLoader] = useState(true);
  const handleIsLoader = () => {
    setIsLoader(false);
  };
  return (
    <>
      {isLoader ? (
        <div className="h-screen bg-[#f1f5f9] text-[#0278AB] h-80 flex flex-col justify-center items-center mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Get Link to Download Drivers or Setup Printer
          </h2>
          <div className="flex gap-4">
            <button
              onClick={handleIsLoader}
              className="bg-black text-[#f1f5f9] py-3 px-6 rounded-lg shadow hover:bg-[#251e70] transition duration-300"
            >
              Download for Windows
            </button>
            <button
              onClick={handleIsLoader}
              className="bg-black text-[#f1f5f9] py-3 px-6 rounded-lg shadow hover:bg-[#251e70] transition duration-300"
            >
              Download for Mac
            </button>
          </div>
        </div>
      ) : (
        <LoaderBar />
      )}
    </>
  );
};

export default DownloadPage;
