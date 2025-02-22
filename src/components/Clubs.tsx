import {
    main_logo,
    logo_data,
  } from "@/constants";
  import React from "react";
  import SkillDataProvider from "../lib/SkillDataProvider";
  import SkillText from "../lib/SkillText";
  
  const Clubs = () => {
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
        style={{ transform: "scale(0.9)" }}
      >
        <SkillText />
  
        <div className="flex flex-row justify-around flex-wrap">
          {main_logo.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
  
        <div className="flex flex-row justify-around flex-wrap  gap-5 items-center">
          {logo_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
  
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Clubs;
  