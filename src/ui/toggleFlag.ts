import { Cell } from "../types/cell";

export function toggleFlag(cell: Cell): void {

    if (!cell.hasFlag) {

        cell.cellElement.textContent = "🚩";
        cell.hasFlag = true;

    } else {

        cell.cellElement.textContent = "";
        cell.hasFlag = false;        

    }
}
