import { useState, useEffect, useRef } from "react";

const VideoPlayer = () => {
  const [showImage, setShowImage] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoDuration = 10000; // 10 seconds

    const timer = setTimeout(() => {
      setShowImage(true);
    }, videoDuration);

    if (videoRef.current) {
      videoRef.current.play();
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="mt-10 flex justify-center items-center"
      style={{ overflow: "hidden", height: "calc(100vh - 20px)" }}
    >
      {!showImage ? (
        <video
          ref={videoRef}
          width="80%"
          height="auto"
          style={{
            mixBlendMode: "multiply",
            position: "relative",
          }}
          muted
          loop={true}
        >
          <source
            src="https://123printdesk.com/image/in-l-1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        <section>
          <img
            src="https://i.ibb.co/WG8nPR9/Whats-App-Image-2024-06-24-at-11-09-43-PM.jpg"
            alt="Placeholder"
            style={{
              width: "100%",
              height: "30rem",
              position: "relative",
            }}
          />
        </section>
      )}
    </div>
  );
};

export default VideoPlayer;
