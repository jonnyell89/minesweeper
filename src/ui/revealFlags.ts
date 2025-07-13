import { Cell } from "../types/cell";
import { getCell } from "../utils/getCell";

export function revealFlags(grid: Cell[][]): void {
    
    for (let y = 0; y < grid.length; y++) {
        
        for (let x = 0; x < grid[0].length; x++) {

            const cell: Cell | null = getCell(grid, y, x);

            if (!cell) continue;

            if (cell.isHidden && cell.hasMine) revealFlag(cell);
        }
    }
}

function revealFlag(cell: Cell): void {

    cell.cellElement.textContent = "🚩";
    cell.hasFlag = true;   
}
