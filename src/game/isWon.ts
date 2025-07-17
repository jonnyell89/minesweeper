import { Cell } from "../types/cell";

export function isWon(grid: Cell[][]): boolean {
    
    return grid.every(row => 

        row.every(cell => cell.mine !== null || !cell.isHidden)
    )
}

export function playerHasWon(): void {

}
