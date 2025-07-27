import { Cell } from "../types/cell";
import { Flag } from "../types/flag";

export let startGame: boolean = false;
export let endGame: boolean = false;
export let revealedCells: Cell[] = [];
export let plantedFlags: Flag[] = [];

export function startGameTrue(): void {

    if (!startGame) startGame = true;
    else console.log(`startGame already set to true.`);
}

export function startGameFalse(): void {

    if (startGame) startGame = false;
    else console.log(`startGame already set to false.`);
}

export function endGameTrue(): void {

    if (!endGame) endGame = true;
    else console.log(`endGame already set to true.`);
}

export function endGameFalse(): void {

    if (endGame) endGame = false;
    else console.log(`endGame already set to false.`);
}

export function resetGame(): void {

    startGame = false;
    endGame = false;
}

export function getRevealedCellCount(): number {
    return revealedCells.length;
}

export function getRevealedCells(): Cell[] {
    return revealedCells;
}

export function clearRevealedCells(): void {
    revealedCells = [];
}

export function addCellToRevealedCells(cell: Cell): void {
    revealedCells.push(cell);
}

export function removeCellFromRevealedCells(cell: Cell): void {
    revealedCells = revealedCells.filter(
        c => c.rowIndex !== cell.rowIndex && c.colIndex !== cell.colIndex
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

export function addFlagToPlantedFlags(flag: Flag): void {
    plantedFlags.push(flag);
}

export function removeFlagFromPlantedFlags(flag: Flag): void {
    plantedFlags = plantedFlags.filter(
        pf => pf.rowIndex !== flag.rowIndex && pf.colIndex !== flag.colIndex
    )
}
