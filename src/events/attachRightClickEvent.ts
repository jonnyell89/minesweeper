// import { getFlagCount } from "../state";
import { Cell } from "../types/cell";
// import { toggleFlag } from "../ui/toggleFlag";

export function attachRightClickEvent(grid: Cell[][]): void {

    grid.forEach((row, y) => {

        row.forEach((cell, x) => {

            console.log(`Adding event listener at grid[${y}][${x}]`, cell);
            
            cell.cellElement.addEventListener("contextmenu", (event: MouseEvent) => handleRightClickEvent(event, cell));

            console.log(`Added event listener at grid[${y}][${x}]`, cell);
        })
    })
}

export function handleRightClickEvent(event: MouseEvent, cell: Cell): void {

    event.preventDefault();
    
    alert(`Right-clicked on cell ${cell.rowIndex}, ${cell.colIndex}`);

    // event.preventDefault();

    // toggleFlag(cell);

    // console.log(`grid[${cell.rowIndex}][${cell.colIndex}]`)

    // console.log(cell.hasFlag, cell.cellElement.textContent);

    // console.log(getFlagCount());
}
