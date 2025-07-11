import { Cell } from "../types/cell";

export function revealCells(grid: Cell[][], rowIndex: number, colIndex: number): void {

    if (rowIndex < 0 || rowIndex >= grid.length || colIndex < 0 || colIndex >= grid[0].length) return; // CELL OUT OF BOUNDS

    const cell = grid[rowIndex][colIndex];

    if (!cell.isHidden) return; // CELL ALREADY REVEALED

    if (cell.hasMine) return; // END GAME CONDITION MET

    if (cell.adjacentMines > 0) return revealCell(grid, rowIndex, colIndex); // CELL ADJACENT TO MINE

    if (cell.isHidden) {

        revealCell(grid, rowIndex, colIndex);

        for (let y = -1; y <= 1; y++) {
            
            for (let x = -1; x <= 1; x++) {

                const ySubgrid = rowIndex + y;
                const xSubgrid = colIndex + x;

                revealCells(grid, ySubgrid, xSubgrid);
            }
        }
    }
}

function revealCell(grid: Cell[][], rowIndex: number, colIndex: number): void {

    const cell = grid[rowIndex][colIndex];

    
}
