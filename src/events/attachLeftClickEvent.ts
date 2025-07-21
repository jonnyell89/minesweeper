import { isLost, playerHasLost } from "../game/isLost";
import { isWon, playerHasWon } from "../game/isWon";
import { revealCells } from "../grid/revealCells";
import { getRemainingMines } from "../state";
import { Cell } from "../types/cell";
import { Mine } from "../types/mine";

export function attachLeftClickEvent(grid: Cell[][]): void {

    grid.forEach(row => {

        row.forEach(cell => {
            
            cell.cellElement.addEventListener("click", () => handleLeftClickEvent(grid, cell, getRemainingMines()));
        })
    })
}

export function handleLeftClickEvent(grid: Cell[][], cell: Cell, mines: Mine[]): void {

    revealCells(grid, cell);

    if (isLost(grid)) playerHasLost(grid, mines);

    if (isWon(grid)) playerHasWon(grid, mines);
}
