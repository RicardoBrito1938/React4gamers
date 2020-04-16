import React from "react";
import "./index.css";

import { GAME_SIZE } from "../../settings/constants";

const Hero = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: GAME_SIZE,
        height: GAME_SIZE,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: "no-repeat",
        animation: "hero-animation 1s steps(4) infinite",
      }}
    />
  );
};

export default Hero;
