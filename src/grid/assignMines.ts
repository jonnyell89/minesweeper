import type { Cell } from "../types/cell";
import type { Mine } from "../types/mine";

export function assignMines(grid: Cell[][], mines: Mine[]): Cell[][] {

    for (const mine of mines) {
        
        const cell: Cell = grid[mine.rowIndex][mine.colIndex];

        cell.hasMine = true;
    }

    return grid;
}
