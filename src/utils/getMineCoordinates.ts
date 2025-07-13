import { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { getCell } from "./getCell";
import { getRandomCoordinates } from "./getRandomCoordinates";

export function getMineCoordinates(grid: Cell[][], mineCount: number): Mine[] {

    const mines: Mine[] = [];

    while (mines.length < mineCount) {

        const [yRandom, xRandom]: [number, number] = getRandomCoordinates(grid[0].length, grid.length);

        const cell: Cell | null = getCell(grid, yRandom, xRandom);

        if (!cell) continue; // CELL OUT OF BOUNDS

        if (!cell.hasMine) mines.push({ rowIndex: yRandom, colIndex: xRandom });
    }

    return mines;
}
