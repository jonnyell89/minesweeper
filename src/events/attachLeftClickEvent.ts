import { revealCells } from "../grid/revealCells";
import { Cell } from "../types/cell";
import { getCell } from "../utils/getCell";

export function attachLeftClickEvent(grid: Cell[][]): void {

    for (let y = 0; y < grid.length; y++) {
        
        for (let x = 0; x < grid[0].length; x++) {
            
            const cell: Cell | null = getCell(grid, y, x);

            if (!cell) continue;

            cell.cellElement.addEventListener("click", () => handleLeftClickEvent(grid, y, x, cell));
        }
    }
}

export function handleLeftClickEvent(grid: Cell[][], rowIndex: number, colIndex: number, cell: Cell): void {

    revealCells()
}
