import { MINE_COUNT } from "../config";
import { updateCounter } from "../init/initCounter";
import { stopTimer } from "../init/initTimer";
import { toggleEndGame } from "../state";
import { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { resetButtonWin } from "../ui/resetButtonWin";
import { revealFlags } from "./revealFlags";

export function hasWon(gridWidth: number, gridHeight: number, mineCount: number, revealedCells: Cell[]): boolean {

    return gridWidth * gridHeight - mineCount === revealedCells.length;
}

export function isWon(grid: Cell[][]): boolean {
    
    return grid.every(row => 

        row.every(cell => cell.mine !== null || !cell.isHidden)
    )
}

export function playerHasWon(grid: Cell[][], mines: Mine[], topContainerButton: HTMLButtonElement, topContainerCounter: HTMLDivElement): void {

    revealFlags(grid, mines);

    updateCounter(topContainerCounter, MINE_COUNT);

    resetButtonWin(topContainerButton);

    toggleEndGame();

    stopTimer();
}
