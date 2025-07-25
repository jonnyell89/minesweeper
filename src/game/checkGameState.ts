import { GRID_HEIGHT, GRID_WIDTH, MINE_COUNT } from "../config";
import { getRevealedCells } from "../state";
import { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { hasLost, isLost, playerHasLost } from "./isLost";
import { hasWon, isWon, playerHasWon } from "./isWon";

export function checkGameState(grid: Cell[][], mines: Mine[], topContainerButton: HTMLButtonElement, topContainerCounter: HTMLDivElement): void {

    if (hasLost(getRevealedCells())) {

        if (isLost(grid)) playerHasLost(grid, mines, topContainerButton);
    }

    if (hasWon(GRID_WIDTH, GRID_HEIGHT, MINE_COUNT, getRevealedCells())) {

        if (isWon(grid)) playerHasWon(grid, mines, topContainerButton, topContainerCounter);
    }
}
