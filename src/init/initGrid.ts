import { assignMines } from "../grid/assignMines";
import { assignNumbers } from "../grid/assignNumbers";
import { createGrid } from "../grid/createGrid";
import { GRID_HEIGHT, GRID_WIDTH } from "../config";
import type { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { selectElement } from "../utils/selectElement";
import { attachLeftClickEvent } from "../events/attachLeftClickEvent";
import { attachRightClickEvent } from "../events/attachRightClickEvent";

export function initGrid(): Cell[][] {

    const bottomContainerGrid = selectElement<HTMLDivElement>(".bottomContainer__grid"); // Select

    bottomContainerGrid.innerHTML = ""; // Clears bottomContainer__grid

    const grid: Cell[][] = createGrid(bottomContainerGrid, GRID_WIDTH, GRID_HEIGHT) // Render

    return grid;
}

export function populateGrid(grid: Cell[][], mines: Mine[]): void {

    assignMines(grid, mines);

    assignNumbers(grid, mines);
}

export function attachGridEventListeners(grid: Cell[][]): void {

    attachLeftClickEvent(grid);

    attachRightClickEvent(grid);
}
