import React from "react";
import Hero from "../Hero";
import MiniDemon from "../MiniDemon";
import Demon from "../Demon";
import Trap from "../Trap";
import Chest from "../Chest";

import { GAME_SIZE } from "../../settings/constants";

const Board = () => {
  return (
    <div>
      <Hero />
      <Trap />
      <Chest />
      <MiniDemon initialPosition={{ x: 5, y: 5 }} />
      <MiniDemon initialPosition={{ x: 10, y: 10 }} />
      <Demon />
      <img
        src="./assets/tileset.gif"
        alt=""
        width={GAME_SIZE}
        height={GAME_SIZE}
      />
    </div>
  );
};

export default Board;
