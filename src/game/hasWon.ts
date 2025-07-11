import { Cell } from "../types/cell";

export function hasWon(grid: Cell[][], gridWidth: number, gridHeight: number): boolean {

    for (let y = 0; y < gridHeight; y++) {

        for (let x = 0; x < gridWidth; x++) {

            const cell = grid[y][x];

            if (!cell.hasMine && cell.isHidden) return false;
        }
    }

    return true;
}

// export function isWon(grid: Cell[][]): boolean {
    
//     return grid.every(row => 
        
//         row.every(cell => cell.hasMine || !cell.isHidden)
//     )
// }

export function isWon(grid: Cell[][]): boolean {
    
    return grid.every(row => 
        
        row.every(cell => !cell.hasMine && cell.isHidden)
    )
}
