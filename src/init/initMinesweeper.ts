import { MINE_COUNT } from "../config";
import { attachGridEvents } from "../events/attachGridEventListeners";
import { populateGrid } from "../grid/populateGrid";
import { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { getMineCoordinates } from "../utils/getMineCoordinates";
import { initCounter } from "./initCounter";
import { initDocumentRoot } from "./initDocumentRoot";
import { initGrid } from "./initGrid";
import { attachResetClickEvent, initResetButton } from "./initResetButton";
import { initTimer } from "./initTimer";

export function initMinesweeper(): void {

    initDocumentRoot();

    const grid: Cell[][] = initGrid();

    const mines: Mine[] = getMineCoordinates(grid, MINE_COUNT);

    const timer: HTMLDivElement = initTimer();

    const counter: HTMLDivElement = initCounter();

    const resetButton: HTMLButtonElement = initResetButton();

    populateGrid(grid, mines);

    attachGridEvents(grid, mines);

    attachResetClickEvent(resetButton, timer, counter);
}
