import { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { revealFlags } from "./revealFlags";

export function isWon(grid: Cell[][]): boolean {
    
    return grid.every(row => 

        row.every(cell => cell.mine !== null || !cell.isHidden)
    )
}

export function playerHasWon(grid: Cell[][], mines: Mine[]): void {

    revealFlags(grid, mines);
}
