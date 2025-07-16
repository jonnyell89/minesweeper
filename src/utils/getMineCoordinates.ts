import { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { getMine } from "./getMine";
import { getRandomCoordinates } from "./getRandomCoordinates";

export function getMineCoordinates(grid: Cell[][], mineCount: number): Mine[] {

    const mines: Mine[] = [];

    while (mines.length < mineCount) {

        const [yRandom, xRandom]: [number, number] = getRandomCoordinates(grid[0].length, grid.length);

        const mine: Mine = getMine(yRandom, xRandom);

        if (!mines.includes(mine)) {

            mines.push(mine)
        };
    }

    return mines;
}
