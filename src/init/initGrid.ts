import { assignMines } from "../grid/assignMines";
import { assignNumbers } from "../grid/assignNumbers";
import { createGrid } from "../grid/createGrid";
import { CELL_SIZE, GRID_HEIGHT, GRID_WIDTH, MINE_COUNT } from "../state";
import type { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { getMineCoordinates } from "../utils/getMineCoordinates";
import { selectElement } from "../utils/selectElement";

export function initGrid(): Cell[][] {

    const bottomContainerGrid = selectElement<HTMLDivElement>(".bottomContainer__grid"); // Select

    const grid: Cell[][] = createGrid(bottomContainerGrid, GRID_WIDTH, GRID_HEIGHT) // Render

    const mines: Mine[] = getMineCoordinates(grid, MINE_COUNT);

    const gridWithMines: Cell[][] = assignMines(grid, mines);

    const gridWithMinesAndNumbers: Cell[][] = assignNumbers(gridWithMines, mines);

    return gridWithMinesAndNumbers;
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
