import type { Cell } from "../types/cell";
import type { Mine } from "../types/mine";
import { getRandomCoordinates } from "../utils/getRandomCoordinates";

export function assignMines(grid: Cell[][], gridWidth: number, gridHeight: number, mineCount: number): Mine[] {

    const mines: Mine[] = [];
    let assignedMines = 0;

    while (assignedMines < mineCount) {

        const [yRandom, xRandom] = getRandomCoordinates(gridWidth, gridHeight);

        if (!grid[yRandom][xRandom].hasMine) {
            
            grid[yRandom][xRandom].hasMine = true;

            mines.push({ rowIndex: yRandom, colIndex: xRandom });

            assignedMines++;
        }
    }

    return mines;
}
