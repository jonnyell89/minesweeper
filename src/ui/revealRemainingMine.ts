import { Cell } from "../types/cell";

export function revealRemainingMine(cell: Cell): void {

    if (cell.mine !== null) {

        if (cell.flag !== null) return;

        cell.cellElement.textContent = cell.mine.icon;
        cell.cellElement.classList.add("pressed-button");
    }    
}
