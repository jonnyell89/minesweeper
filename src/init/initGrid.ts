import { createGrid } from "../grid/createGrid";
import { CELL_SIZE, GRID_HEIGHT, GRID_WIDTH } from "../state";
import type { Cell } from "../types/cell";
import { selectElement } from "../utils/selectElement";

export function initGrid(): Cell[][] {

    const bottomContainerGrid = selectElement<HTMLDivElement>(".bottomContainer__grid"); // Select

    const grid: Cell[][] = createGrid(bottomContainerGrid, GRID_WIDTH, GRID_HEIGHT) // Render

    return grid;
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
