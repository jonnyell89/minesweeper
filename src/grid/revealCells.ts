import { Cell } from "../types/cell";
import { revealNumber } from "../ui/revealNumber";
import { getCell } from "../utils/getCell";
import { revealMine } from "../ui/revealMine";

export function revealCells(grid: Cell[][], cell: Cell): void {

    if (!cell.isHidden) return; // CELL ALREADY REVEALED

    if (cell.flag !== null) return; // CELL CONTAINS FLAG

    if (cell.mine !== null) return revealMine(cell); // CELL CONTAINS MINE

    if (cell.adjacentMines > 0) return revealNumber(cell); // CELL ADJACENT TO MINE

    revealCell(cell);

    revealAdjacentCells(grid, cell); // Contains recursive call to revealCells function.
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

export function revealCell(cell: Cell): void {

    cell.isHidden = false;
}
