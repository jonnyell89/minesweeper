import { Cell } from "../types/cell";

export function hasWon(grid: Cell[][]): boolean {

    for (let y = 0; y < grid.length; y++) {

        for (let x = 0; x < grid[0].length; x++) {

            const cell = grid[y][x];

            if (!cell.hasMine && cell.isHidden) return false;
        }
    }

    return true;
}

export function isWon(grid: Cell[][]): boolean {
    
    return grid.every(row => 

        // row.every(cell => cell.hasMine || !cell.isHidden)
        row.every(cell => !cell.hasMine && cell.isHidden)
    )
}
