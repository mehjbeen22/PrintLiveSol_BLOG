import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const DownloadPage = () => {
  const [isLoader, setIsLoader] = useState(true);
  const handleIsLoader = () => {
    setIsLoader(false);
  };
  return (
    <>
      {isLoader ? (
        <div className="h-screen  text-blue-500 flex flex-col justify-center items-center p-6">
          <h2 className="text-3xl font-bold mb-8">
            Get Link to Download Drivers or Setup Printer
          </h2>
          <div className="flex gap-4">
            <button
              onClick={handleIsLoader}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Download for Windows
            </button>
            <button
              onClick={handleIsLoader}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Download for Mac
            </button>
          </div>
        </div>
      ) : (
        <VideoPlayer />
      )}
    </>
  );
};

export default DownloadPage;
