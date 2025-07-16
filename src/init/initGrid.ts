import { assignMines } from "../grid/assignMines";
import { assignNumbers } from "../grid/assignNumbers";
import { createGrid } from "../grid/createGrid";
import { CELL_SIZE, GRID_HEIGHT, GRID_WIDTH, MINE_COUNT } from "../config";
import type { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { getMineCoordinates } from "../utils/getMineCoordinates";
import { selectElement } from "../utils/selectElement";
import { attachLeftClickEvent } from "../events/attachLeftClickEvent";
import { attachRightClickEvent, attachRightClickEvents } from "../events/attachRightClickEvent";

export function initGrid(): void {

    const bottomContainerGrid = selectElement<HTMLDivElement>(".bottomContainer__grid"); // Select

    const grid: Cell[][] = createGrid(bottomContainerGrid, GRID_WIDTH, GRID_HEIGHT) // Render

    const mines: Mine[] = getMineCoordinates(grid, MINE_COUNT); // Build

    const gridWithMines: Cell[][] = assignMines(grid, mines); // Build

    const gridWithMinesAndNumbers: Cell[][] = assignNumbers(gridWithMines, mines); // Build

    attachLeftClickEvent(gridWithMinesAndNumbers); // Attach

    attachRightClickEvents(gridWithMinesAndNumbers); // Attach
}

export function initDocumentRoot(): void {

    const documentRoot = document.documentElement;

    if (!documentRoot) {
        throw new Error("documentRoot did not render.");
    }

    documentRoot.style.setProperty("--grid-width", GRID_WIDTH.toString());
    documentRoot.style.setProperty("--grid-height", GRID_HEIGHT.toString());
    documentRoot.style.setProperty("--cell-size", CELL_SIZE);
}
