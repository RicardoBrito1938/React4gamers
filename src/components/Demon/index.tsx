import React from "react";
import "./index.css";

import { TILE_SIZE, DEMON_TILE_TILE } from "../../settings/constants";

const Demon = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: TILE_SIZE * 5,
        left: TILE_SIZE * 5,
        width: DEMON_TILE_TILE,
        height: DEMON_TILE_TILE,
        backgroundImage: "url(./assets/DEMON.png)",
        backgroundRepeat: "no-repeat",
        animation: "Demon-animation 1s steps(4) infinite",
      }}
    />
  );
};

export default Demon;
