import { Cell } from "../types/cell";

export function getCell(grid: Cell[][], y: number, x: number): Cell | null {

    if (y < 0 || y >= grid.length || x < 0 || x >= grid[0].length) {

        console.log(`Cell at grid[${y}][${x}] is out of bounds.`)

        return null;
    }

    return grid[y][x];
}
