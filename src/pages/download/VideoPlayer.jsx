import { useState } from "react";

const VideoPlayer = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div
      className="h-screen mt-20 flex justify-center items-center "
      style={{ overflow: "hidden", height: "calc(100vh - 20px)" }}
    >
      {!videoEnded ? (
        <video
          width="80%"
          height="auto"
          style={{
            mixBlendMode: "multiply",
            position: "relative",
          }}
          autoPlay
          muted
          loop={false}
          onEnded={handleVideoEnd}
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
