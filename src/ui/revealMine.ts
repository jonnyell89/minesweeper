import { revealCell } from "../grid/revealCells";
import { Cell } from "../types/cell";

export function revealMine(cell: Cell): void {

    revealCell(cell);

    cell.cellElement.textContent = "💣";
    cell.cellElement.style.backgroundColor = "#bc171a";
    cell.cellElement.style.border = "2px solid #242424";    
}
