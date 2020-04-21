import React from "react";
import CanvasProvider from "../context/canvas";
import Debugger from "./Debugger";
import Board from "./Board";
import ChestsProvider from "../context/chests";

export default function Game() {
    return (
        <CanvasProvider>
            <ChestsProvider>
                <Debugger />
                <Board />
            </ChestsProvider>
        </CanvasProvider>
    );
}
