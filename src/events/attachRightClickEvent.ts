import { Cell } from "../types/cell";
import { getCell } from "../utils/getCell";

export function attachRightClickEvent(grid: Cell[][]): void {

    for (let y = 0; y < grid.length; y++) {
        
        for (let x = 0; x < grid[0].length; x++) {
            
            const cell: Cell | null = getCell(grid, y, x);

            if (!cell) continue;

            cell.cellElement.addEventListener("contextmenu", (event: MouseEvent) => handleRightClickEvent(event, cell));
        }
    }
}

export function handleRightClickEvent(event: MouseEvent, cell: Cell): void {

    event.preventDefault();
}
