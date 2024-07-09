import React, { useEffect, useState } from 'react';
import JivoChatWidget from '../JivochatWidget';

const LoaderBar = () => {
  const [width, setWidth] = useState(0);
  const [downloadFailed, setDownloadFailed] = useState(false);
  const [showErrorImage, setShowErrorImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (width < 100) {
        setWidth((prevWidth) => prevWidth + 10);
      } else {
        clearInterval(interval);
        setDownloadFailed(true);
        setTimeout(() => {
          setShowErrorImage(true);
        }, 1000); // Show error image 1 second after the download fails
      }
    }, 2000); // Adjust the interval to change the speed (1000ms = 1 second)

    return () => clearInterval(interval);
  }, [width]);

  return (
    <main className="h-screen flex  justify-center items-center p-10 mt-20">
      {showErrorImage ? (
        <div>
          <img
            src="https://i.ibb.co/WG8nPR9/Whats-App-Image-2024-06-24-at-11-09-43-PM.jpg"
            alt="Error"
          />

          <JivoChatWidget />
        </div>
      ) : (
        <section className="h-screen bg-[#f1f5f9] w-[90%] p-10">
          <p className="bg-black text-white p-5 text-3xl">Printer Connect</p>
          <div>
            <p className="text-lg mt-4">Downloading drivers......</p>
            <section className="h-4 bg-gray-300 overflow-hidden mt-10">
              <div
                className={`h-full ${
                  width === 100 ? 'bg-red-500' : 'bg-green-500'
                }`}
                style={{
                  width: `${width}%`,
                  transition: 'width 0.3s ease',
                  minWidth: '10%',
                }}
              ></div>
            </section>
          </div>
          {downloadFailed && (
            <div className="mt-6">
              <p className="font-bold text-red-500 text-xl">
                Downloading Failed!
              </p>
              <p className="text-lg">
                <span className="text-red-500 mr-4">X</span>Network Error:
                Download could not be completed!
              </p>
            </div>
          )}
        </section>
      )}
    </main>
  );
};

export default LoaderBar;
