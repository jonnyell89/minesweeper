import { Cell } from "../types/cell";
import { revealNumber } from "../ui/revealNumber";
import { getCell } from "../utils/getCell";
import { revealMine } from "../ui/revealMine";
import { pressedButton } from "../ui/pressedButton";
import { addCellToRevealedCells, getPlantedFlagCount, getRevealedCellCount } from "../state";
import { toggleFlag } from "../ui/toggleFlag";

export function revealCells(grid: Cell[][], cell: Cell): void {

    if (!cell.isHidden) return; // Returns if cell already revealed.

    if (cell.flag !== null) { // During recursion, if cell contains a flag:

        if (cell.mine !== null) return; // Returns if cell contains a mine.

        else toggleFlag(cell); // Otherwise, flag is removed.
    }

    console.log(`Non-toggle Planted Flag Count: ${getPlantedFlagCount()}`);

    revealCell(cell);

    addCellToRevealedCells(cell);

    if (cell.mine !== null) return revealMine(cell); // Returns if cell contains a mine.

    pressedButton(cell); // UI

    if (cell.adjacentMines > 0) return revealNumber(cell); // Returns if cell contains an adjacent mine.

    revealAdjacentCells(grid, cell); // Contains recursive call to revealCells function.
}

export function revealCell(cell: Cell): void {

    cell.isHidden = false;
}

export function revealAdjacentCells(grid: Cell[][], cell: Cell): void {

    for (let y = -1; y <= 1; y++) {
        
        for (let x = -1; x <= 1; x++) {

            const yAdjacentCell: number = cell.rowIndex + y;
            const xAdjacentCell: number = cell.colIndex + x;

            const adjacentCell: Cell | null = getCell(grid, yAdjacentCell, xAdjacentCell);

            if (!adjacentCell) continue; // CELL OUT OF BOUNDS

            revealCells(grid, adjacentCell);
        }
    }
}
