// import { isLost, playerHasLost } from "../game/isLost";
// import { isWon, playerHasWon } from "../game/isWon";
import { revealCells } from "../grid/revealCells";
import { Cell } from "../types/cell";

export function attachLeftClickEvent(grid: Cell[][]): void {

    grid.forEach(row => {

        row.forEach(cell => {
            
            cell.cellElement.addEventListener("click", () => handleLeftClickEvent(grid, cell));
        })
    })
}

export function handleLeftClickEvent(grid: Cell[][], cell: Cell): void {

    revealCells(grid, cell);

    // if (isLost(grid)) playerHasLost();

    // if (isWon(grid)) playerHasWon();
}
