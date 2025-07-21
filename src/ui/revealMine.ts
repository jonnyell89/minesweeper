import { revealCell } from "../grid/revealCells";
import { Cell } from "../types/cell";

export function revealMine(cell: Cell): void {

    revealCell(cell);

    if (cell.mine !== null) {

        cell.cellElement.textContent = cell.mine.icon;
        cell.cellElement.classList.add("revealed-mine");
    }    
}
