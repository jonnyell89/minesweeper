import { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { revealRemainingMines } from "./revealRemainingMines";

export function isLost(grid: Cell[][]): boolean {

    return grid.some(row => 

        row.some(cell => !cell.isHidden && cell.mine !== null)
    )
}

export function playerHasLost(grid: Cell[][], mines: Mine[]): void {
    
    revealRemainingMines(grid, mines);
}
