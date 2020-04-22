import useInterval from "@use-it/interval";
import React, { useState, useContext } from "react";
import { EDirection, EWalker } from "../../settings/constants";
import { CanvasContext } from "../../context/canvas";

function useEnemyMoviment(initialPosition) {
    const canvasContext = useContext(CanvasContext);
    const [positionState, updatePositionState] = useState(initialPosition);
    const [direction, updateDirectionState] = useState(EDirection.RIGHT);

    useInterval(function move() {
        var random = Math.floor(Math.random() * 4);
        var directionArray = Object.values(EDirection);
        const randomDirection = directionArray[random];

        const { nextMove, nextPosition } = canvasContext.updateCanvas(
            randomDirection,
            positionState,
            EWalker.ENEMY
        );

        if (nextMove.valid) {
            updateDirectionState(randomDirection);
            updatePositionState(nextPosition);
        }

        if (nextMove.dead) {
            alert("morreu");
            window.location.reload();
        }
    }, 2000);

    return {
        position: positionState,
        direction: direction,
    };
}

export default useEnemyMoviment;
