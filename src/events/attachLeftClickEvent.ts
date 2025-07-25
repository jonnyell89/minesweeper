import { MINE_COUNT } from "../config";
import { checkGameState } from "../game/checkGameState";
import { revealCells } from "../grid/revealCells";
import { updateCounter } from "../init/initCounter";
import { startTimer } from "../init/initTimer";
import { endGame, startGame, toggleStartGame } from "../state";
import { Cell } from "../types/cell";
import { Mine } from "../types/mine";

export function attachLeftClickEvent(grid: Cell[][], mines: Mine[], topContainerButton: HTMLButtonElement, topContainerCounter: HTMLDivElement, topContainerTimer: HTMLDivElement): void {

    grid.forEach(row => {

        row.forEach(cell => {
            
            cell.cellElement.addEventListener("click", () => handleLeftClickEvent(grid, cell, mines, topContainerButton, topContainerCounter, topContainerTimer));
        })
    })
}

export function handleLeftClickEvent(grid: Cell[][], cell: Cell, mines: Mine[], topContainerButton: HTMLButtonElement, topContainerCounter: HTMLDivElement, topContainerTimer: HTMLDivElement): void {

    if (endGame) return; // Prevents left-clicks after the game has ended.

    if (!startGame) {

        toggleStartGame(); // Toggles game state.

        startTimer(topContainerTimer); // UI
    }

    if (cell.flag !== null) return; // Prevents left-clicks on cells that contain a flag.

    revealCells(grid, cell);

    updateCounter(topContainerCounter, MINE_COUNT);

    console.log(`Number of planted flags in the grid: ${countFlagsInGrid(grid)}`);

    checkGameState(grid, mines, topContainerButton, topContainerCounter);
}

export function countFlagsInGrid(grid: Cell[][]): number {
    
    let flags: number = 0;

    grid.forEach(row => {
        row.forEach(cell => {
            if (cell.flag !== null) flags++;
        })
    })
    return flags;
}
