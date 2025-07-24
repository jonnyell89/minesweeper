import { Cell } from "../types/cell";
import { Flag } from "../types/flag";
// import { Mine } from "../types/mine";

export let startGame: boolean = false;
export let endGame: boolean = false;

export let revealedCells: Cell[] = [];
// export let plantedMines: Mine[] = [];
export let plantedFlags: Flag[] = [];

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

// export function getPlantedMineCount(): number {
//     return plantedMines.length;
// }

// export function getPlantedMines(): Mine[] {
//     return plantedMines;
// }

// export function setPlantedMines(mines: Mine[]): void {
//     plantedMines = [...mines];
// }

// export function clearPlantedMines(): void {
//     plantedMines = [];
// }

// export function addMineToPlantedMines(mine: Mine): void {
//     plantedMines.push(mine);
// }

// export function removeMineFromPlantedMines(mine: Mine): void{
//     plantedMines = plantedMines.filter(
//         pm => pm.rowIndex !== mine.rowIndex && pm.colIndex !== mine.colIndex
//     )
// }

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
