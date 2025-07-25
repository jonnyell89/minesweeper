import { MINE_COUNT } from "../config";
import { updateCounter } from "../init/initCounter";
import { endGame, startGame } from "../state";
import { Cell } from "../types/cell";
import { toggleFlag } from "../ui/toggleFlag";

export function attachRightClickEvent(grid: Cell[][], topContainerCounter: HTMLDivElement): void {

    grid.forEach(row => {

        row.forEach(cell => {
            
            cell.cellElement.addEventListener("contextmenu", (event: MouseEvent) => handleRightClickEvent(event, cell, topContainerCounter));
        })
    })
}

export function handleRightClickEvent(event: MouseEvent, cell: Cell, topContainerCounter: HTMLDivElement): void {

    event.preventDefault();

    if (endGame) return; // Prevents right-clicks after the game has ended.

    if (!startGame) return; // Prevents right-clicks before the game has started.

    toggleFlag(cell); // UI

    updateCounter(topContainerCounter, MINE_COUNT); // UI
}
