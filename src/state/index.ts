import { Mine } from "../types/mine";

export let startGame: boolean = false;
export let endGame: boolean = false;

export let flagCount: number = 0;

export let remainingMines: Mine[] = [];

export function getFlagCount(): number {
    return flagCount;
}

export function incrementFlagCount(): void {
    flagCount++;
}

export function decrementFlagCount(): void {
    flagCount--;
}

export function getRemainingMineCount(): number {
    return remainingMines.length;
}

export function getRemainingMines(): Mine[] {
    return remainingMines;
}

export function clearMines(): void {
    remainingMines = [];
}

export function addMine(mine: Mine): void {
    remainingMines.push(mine);
}

export function removeMine(mine: Mine): void{
    remainingMines = remainingMines.filter(
        m => m.rowIndex === mine.rowIndex || m.colIndex === mine.colIndex
    )
}
