import { createGrid } from "../grid/createGrid";
import { GRID_HEIGHT, GRID_WIDTH } from "../config";
import type { Cell } from "../types/cell";
import { selectElement } from "../utils/selectElement";

export function initGrid(): Cell[][] {

    const bottomContainerGrid = selectElement<HTMLDivElement>(".bottomContainer__grid"); // Select

    bottomContainerGrid.innerHTML = ""; // Clears bottomContainer__grid

    const grid: Cell[][] = createGrid(bottomContainerGrid, GRID_WIDTH, GRID_HEIGHT) // Render

    return grid;
}
