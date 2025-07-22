import { Cell } from "../types/cell";
import { Flag } from "../types/flag";
import { Mine } from "../types/mine";

export let startGame: boolean = false;
export let endGame: boolean = false;

export let revealedCells: Cell[] = [];
export let remainingMines: Mine[] = [];
export let plantedFlags: Flag[] = [];

export function getRevealedCellCount(): number {
    return revealedCells.length;
}

export function getRevealedCells(): Cell[] {
    return revealedCells;
}

export function clearCells(): void {
    revealedCells = [];
}

export function addCell(cell: Cell): void {
    revealedCells.push(cell);
}

export function removeCell(cell: Cell): void {
    revealedCells = revealedCells.filter(
        c => c.rowIndex !== cell.rowIndex && c.colIndex !== cell.colIndex
    )
}

export function getRemainingMineCount(): number {
    return remainingMines.length;
}

export function getRemainingMines(): Mine[] {
    return remainingMines;
}

export function setRemainingMines(mines: Mine[]): void {
    remainingMines = [...mines];
}

export function clearMines(): void {
    remainingMines = [];
}

export function addMine(mine: Mine): void {
    remainingMines.push(mine);
}

export function removeMine(mine: Mine): void{
    remainingMines = remainingMines.filter(
        rm => rm.rowIndex !== mine.rowIndex && rm.colIndex !== mine.colIndex
    )
}

export function getPlantedFlagCount(): number {
    return plantedFlags.length;
}

export function getPlantedFlags(): Flag[] {
    return plantedFlags;
}

export function clearPlantedFlags(): void {
    plantedFlags = [];
}

export function addFlag(flag: Flag): void {
    plantedFlags.push(flag);
}

export function removeFlag(flag: Flag): void {
    plantedFlags = plantedFlags.filter(
        pf => pf.rowIndex !== flag.rowIndex && pf.colIndex !== flag.colIndex
    )
}
