import type { Cell } from "../types/cell";
import type { Mine } from "../types/mine";
import { getRandomCoordinates } from "../utils/getRandomCoordinates";

export function assignMines(grid: Cell[][], mineCount: number): Mine[] {

    const mines: Mine[] = [];
    let assignedMines = 0;

    while (assignedMines < mineCount) {

        const [yRandom, xRandom] = getRandomCoordinates(grid[0].length, grid.length);

        const cell = grid[yRandom][xRandom];

        if (!cell.hasMine) {
            
            cell.hasMine = true;

            mines.push({ rowIndex: yRandom, colIndex: xRandom });

            assignedMines++;
        }
    }

    return mines;
}
