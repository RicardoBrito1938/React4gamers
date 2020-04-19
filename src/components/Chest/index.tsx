import React from "react";
import "./index.css";

import { TILE_SIZE } from "../../settings/constants";

const Chest = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: TILE_SIZE * 17,
        left: TILE_SIZE * 6,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: "url(./assets/Chest.png)",
        backgroundRepeat: "no-repeat",
        animation: "Chest-animation 1s steps(3) infinite",
      }}
    />
  );
};

export default Chest;
