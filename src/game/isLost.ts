import { Cell } from "../types/cell";

export function isLost(grid: Cell[][]): boolean {

    return grid.some(row => 

        row.some(cell => cell.mine !== null && !cell.isHidden)
    )
}

export function playerHasLost(): void {
    
}
