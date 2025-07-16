import { Cell } from "../types/cell";

export function revealFlag(cell: Cell): void {

    cell.isHidden = false;
    cell.hasFlag = true;

    cell.cellElement.textContent = "🚩";   
}
