import React, { useState } from "react";

import useEventListener from "@use-it/event-listener";

import { TILE_SIZE, HEAD_OFSET } from "../../settings/constants";

import "./index.css";

interface IObjectLiteral {
  [key: string]: any;
}

const Hero = () => {
  const [heroPositionX, setHeroPositionX] = useState(8);
  const [heroPositionY, setHeroPositionY] = useState(3);

  const [headDirection, setHeadDirection] = useState("right");

  useEventListener("keydown", (event: any) => {
    const keyEvents: IObjectLiteral = {
      ArrowUp: () => setHeroPositionY(heroPositionY + 1),
      ArrowDown: () => setHeroPositionY(heroPositionY - 1),
      ArrowLeft: () => {
        setHeadDirection("left");
        setHeroPositionX(heroPositionX - 1);
      },
      ArrowRight: () => {
        setHeadDirection("right");
        setHeroPositionX(heroPositionX + 1);
      },
    };

    if (keyEvents[event.key]) {
      keyEvents[event.key]();
    }
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: TILE_SIZE * heroPositionY,
        left: TILE_SIZE * heroPositionX,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFSET}px`,
        animation: "hero-animation 1s steps(4) infinite",
        transform: `scaleX(${headDirection === "right" ? 1 : -1})`,
      }}
    />
  );
};

export default Hero;
