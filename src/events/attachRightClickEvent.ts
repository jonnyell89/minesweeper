import { Cell } from "../types/cell";
import { toggleFlag } from "../ui/toggleFlag";

export function attachRightClickEvent(grid: Cell[][]): void {

    grid.forEach(row => {

        row.forEach(cell => {
            
            cell.cellElement.addEventListener("contextmenu", (event: MouseEvent) => handleRightClickEvent(event, cell));
        })
    })
}

export function handleRightClickEvent(event: MouseEvent, cell: Cell): void {

    event.preventDefault();

    toggleFlag(cell);
}
