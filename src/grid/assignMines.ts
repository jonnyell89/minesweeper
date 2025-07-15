import type { Cell } from "../types/cell";
import type { Mine } from "../types/mine";
import { getCell } from "../utils/getCell";

export function assignMines(grid: Cell[][], mines: Mine[]): Cell[][] {

    for (const mine of mines) {
        
        const cell: Cell | null = getCell(grid, mine.rowIndex, mine.colIndex);

        if (!cell) continue; // CELL OUT OF BOUNDS

        cell.hasMine = true;

        console.log(`Mine assigned to cell at grid[${cell.rowIndex}][${cell.colIndex}].`)
    }

    return grid;
}
