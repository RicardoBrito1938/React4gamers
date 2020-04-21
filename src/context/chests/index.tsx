import React, { ReactNode, createContext, useState } from "react";

interface IProps {
    children: ReactNode;
}

export const ChestsContext = createContext({
    totalChests: 0,
    openedChests: {
        total: 0,
        positions: [],
    },
    updateOpenedChests: () => null,
});

function ChestsProvider(props: IProps) {
    const [chestsState, updateChestsState] = useState({
        totalChests: 2,
        openedChests: {
            total: 0,
            positions: [],
        },
        updateOpenedChests: () => {
            console.log("chests");
        },
    });

    return (
        <ChestsContext.Provider value={chestsState}>
            {props.children}
        </ChestsContext.Provider>
    );
}

export default ChestsProvider;
