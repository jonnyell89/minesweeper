import { Cell } from "../types/cell";

export function isLost(grid: Cell[][]): boolean {

    return grid.some(row => 

        row.some(cell => cell.hasMine && !cell.isHidden)
    )
}

export function playerHasLost(): void {
    
}
