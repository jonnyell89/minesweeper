import { Cell } from "../types/cell";

export function revealedCell(cell: Cell): void {

    cell.isHidden = false;

    cell.cellElement.style.backgroundColor = "#384048";
    cell.cellElement.style.borderTop = "none";
    cell.cellElement.style.borderRight = "none";
    cell.cellElement.style.borderBottom = "none";
    cell.cellElement.style.borderLeft = "none";
}
