import { Cell } from "../types/cell";
import { getCell } from "../utils/getCell";

export function revealMines(grid: Cell[][]): void {
    
    for (let y = 0; y < grid.length; y++) {
        
        for (let x = 0; x < grid[0].length; x++) {

            const cell: Cell | null = getCell(grid, y, x);

            if (!cell) continue;

            if (cell.hasMine) revealMine(cell);
        }
    }
}

export function revealMine(cell: Cell): void {

    cell.cellElement.textContent = "💣";
    cell.cellElement.style.backgroundColor = "#bc171a";
    cell.cellElement.style.border = "2px solid #242424";    
}
