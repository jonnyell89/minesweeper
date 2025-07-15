export const CELL_SIZE: string = "30px";
export const GRID_WIDTH: number = 9;
export const GRID_HEIGHT: number = 9;
export const MINE_COUNT: number = 10;

export let startGame = false;
export let endGame = false;

export let flagCount = 0;

export function getFlagCount(): number {
    return flagCount;
}

export function incrementFlagCount(): void {
    flagCount++;
}

export function decrementFlagCount(): void {
    flagCount--;
}
