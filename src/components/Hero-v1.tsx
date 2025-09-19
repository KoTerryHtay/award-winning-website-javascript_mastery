import { useRef, useState, useEffect } from "react";

const totalVideos = 3;
const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const [miniVideoIndex, setMiniVideoIndex] = useState<number | null>(null);

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  // Set initial mini video index
  useEffect(() => {
    if (miniVideoIndex === null) {
      setMiniVideoIndex(upcomingVideoIndex);
    }
  }, [upcomingVideoIndex, miniVideoIndex]);

  const nextVideoRef = useRef<HTMLVideoElement | null>(null);
  const mainVideoRef = useRef<HTMLVideoElement | null>(null);

  const handleMiniVdClick = () => {
    // Store the current mini video index before changing currentIndex
    // const currentMiniIndex = upcomingVideoIndex;

    // Update the main video index
    setCurrentIndex(upcomingVideoIndex);

    // Try to play the main video after index changes (non-blocking)
    if (mainVideoRef.current) mainVideoRef.current.play();

    // After a short delay, update the mini video index to show the next video
    setTimeout(() => {
      setMiniVideoIndex((currentIndex % totalVideos) + 1);
    }, 50);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        // id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-50"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(miniVideoIndex || upcomingVideoIndex)}
                loop
                muted
                // id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                // onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={mainVideoRef}
            src={getVideoSrc(currentIndex)}
            // id=""
            className=""
            loop
            autoPlay
            muted
          />
        </div>
      </div>
    </div>
  );
}
