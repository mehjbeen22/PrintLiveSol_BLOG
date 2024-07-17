import { useState, useEffect, useRef } from "react";

const VideoPlayer = () => {
  const [showImage, setShowImage] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoDuration = 20000; // 20 seconds

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
      className="h-screen mt-10 flex justify-center items-center"
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
        <section className="h-screen mt-40 mb-20 p-20">
          <img
            src="https://i.ibb.co/jhDZ7n8/error-chat.jpg"
            alt="Placeholder"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "relative",
            }}
          />
        </section>
      )}
    </div>
  );
};

export default VideoPlayer;
