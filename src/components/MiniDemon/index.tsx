import React from "react";
import "./index.css";

import { TILE_SIZE, HEAD_OFSET } from "../../settings/constants";

const MiniDemon = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: TILE_SIZE * 13,
        left: TILE_SIZE * 3,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `0 -${TILE_SIZE - HEAD_OFSET}`,
        animation: "miniDemon-animation 1s steps(4) infinite",
      }}
    />
  );
};

export default MiniDemon;
