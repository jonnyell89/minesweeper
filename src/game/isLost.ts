import { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { revealRemainingMines } from "./revealRemainingMines";

export function isLost(grid: Cell[][]): boolean {

    return grid.some(row => 

        row.some(cell => cell.mine !== null && !cell.isHidden)
    )
}

export function playerHasLost(grid: Cell[][], mines: Mine[]): void {
    
    revealRemainingMines(grid, mines);
}
