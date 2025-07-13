import { Cell } from "../types/cell";
import { getCell } from "../utils/getCell";

export function revealCells(grid: Cell[][], rowIndex: number, colIndex: number): void {

    const cell: Cell | null = getCell(grid, rowIndex, colIndex); 

    if (!cell) return; // CELL OUT OF BOUNDS

    if (!cell.isHidden) return; // CELL ALREADY REVEALED

    if (cell.hasMine) return; // END GAME CONDITION MET

    if (cell.adjacentMines > 0) return revealCell(cell); // CELL ADJACENT TO MINE

    revealCell(cell);

    for (let y = -1; y <= 1; y++) {
        
        for (let x = -1; x <= 1; x++) {

            const ySubgrid: number = rowIndex + y;
            const xSubgrid: number = colIndex + x;

            revealCells(grid, ySubgrid, xSubgrid);
        }
    }
}

function revealCell(cell: Cell): void {

    
}
