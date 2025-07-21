import { Cell } from "../types/cell";

export function revealRemainingMine(cell: Cell): void {

    if (cell.mine !== null) {

        cell.cellElement.textContent = cell.mine.icon;
        cell.cellElement.classList.add("pressed-button");
    }    
}
