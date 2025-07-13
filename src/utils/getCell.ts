import { Cell } from "../types/cell";

export function getCell(grid: Cell[][], y: number, x: number): Cell | null {

    if (y < 0 || y >= grid.length || x < 0 || x >= grid[0].length) return null;

    return grid[y][x];
}
