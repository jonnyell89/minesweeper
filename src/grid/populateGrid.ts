import { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { assignMines } from "./assignMines";
import { assignNumbers } from "./assignNumbers";

export function populateGrid(grid: Cell[][], mines: Mine[]): void {

    assignMines(grid, mines);

    assignNumbers(grid, mines);
}
