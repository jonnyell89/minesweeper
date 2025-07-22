import { GRID_HEIGHT, GRID_WIDTH, MINE_COUNT } from "../config";
import { hasLost, isLost, playerHasLost } from "../game/isLost";
import { hasWon, isWon, playerHasWon } from "../game/isWon";
import { revealCells } from "../grid/revealCells";
import { getRevealedCells } from "../state";
import { Cell } from "../types/cell";
import { Mine } from "../types/mine";

export function attachLeftClickEvent(grid: Cell[][], mines: Mine[]): void {

    grid.forEach(row => {

        row.forEach(cell => {
            
            cell.cellElement.addEventListener("click", () => handleLeftClickEvent(grid, cell, mines));
        })
    })
}

export function handleLeftClickEvent(grid: Cell[][], cell: Cell, mines: Mine[]): void {

    revealCells(grid, cell);

    if (hasLost(getRevealedCells())) {

        if (isLost(grid)) playerHasLost(grid, mines);
    }

    if (hasWon(GRID_WIDTH, GRID_HEIGHT, MINE_COUNT, getRevealedCells())) {

        if (isWon(grid)) playerHasWon(grid, mines);
    }
}
