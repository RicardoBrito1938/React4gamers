import useEventListener from "@use-it/event-listener";
import React, { useState, KeyboardEvent, useContext } from "react";
import { EDirection, EWalker } from "../../settings/constants";
import { CanvasContext } from "../../context/canvas";
import { ChestsContext } from "../../context/chests";

function useHeroMoviment(initialPosition) {
    const canvasContext = useContext(CanvasContext);
    const chestsContext = useContext(ChestsContext);

    const [positionState, updatePositionState] = useState(initialPosition);
    const [direction, updateDirectionState] = useState(EDirection.RIGHT);

    useEventListener("keydown", (event: KeyboardEvent<HTMLDivElement>) => {
        const direction = event.key as EDirection;

        if (direction.indexOf("Arrow") === -1) {
            return;
        }

        const { nextMove, nextPosition } = canvasContext.updateCanvas(
            direction,
            positionState,
            EWalker.HERO
        );

        if (nextMove.valid) {
            updatePositionState(nextPosition);
            updateDirectionState(direction);
        }

        if (nextMove.dead) {
            alert("Voce morreu");
        }

        if (nextMove.chest) {
            chestsContext.updateOpenedChests();
        }
    });

    return {
        position: positionState,
        direction: direction,
    };
}

export default useHeroMoviment;
