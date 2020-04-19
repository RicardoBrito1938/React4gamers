import React from "react";
import Tile from "./Tile";
import { canvas } from "../../context/canvas/helpers";

function getCanvasMap() {
  const tileArray = [];
  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
      const tile = canvas[y][x] || canvasYX;

      tileArray.push(<Tile position={position} text={tile} />);
    }
  }
  return tileArray;
}

export default function Debugger() {
  const tiles = getCanvasMap();
  return <div>{tiles}</div>;
}
