import { MINE_COUNT } from "../config";
import { attachGridEvents } from "../events/attachGridEventListeners";
import { populateGrid } from "../grid/populateGrid";
import { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { resetButtonStart } from "../ui/resetButtonStart";
import { getMineCoordinates } from "../utils/getMineCoordinates";
import { initCounter, setCounter } from "./initCounter";
import { initDocumentRoot } from "./initDocumentRoot";
import { initGrid } from "./initGrid";
import { attachResetClickEvent, initReset } from "./initReset";
import { initTimer, setTimer } from "./initTimer";

export function initMinesweeper(): void {

    initDocumentRoot();

    const grid: Cell[][] = initGrid();

    const mines: Mine[] = getMineCoordinates(grid, MINE_COUNT);

    const counter: HTMLDivElement = initCounter();

    setCounter(counter, MINE_COUNT);

    const timer: HTMLDivElement = initTimer();

    setTimer(timer);

    const reset: HTMLButtonElement = initReset();

    resetButtonStart(reset);

    populateGrid(grid, mines);

    attachGridEvents(grid, mines, reset, counter, timer);

    attachResetClickEvent(reset, counter, timer);
}
