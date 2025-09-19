import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedTitle from "./AnimatedTitle";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center", // trigger 800px after it
        scrub: 0.5, // how moving through the animation on scroll
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
    });
  }, []);

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </h2>

        <AnimatedTitle />

        <div className="about-subtext">
          <p>The Game of Games begins-your life, now an epic MMOROG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>

      <div id="clip" className="h-dvh w-screen">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
