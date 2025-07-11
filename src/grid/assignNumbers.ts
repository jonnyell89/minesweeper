import { Cell } from "../types/cell";

export function assignAdjacentNumbers(grid: Cell[][], gridWidth: number, gridHeight: number, mines: { rowIndex: number, colIndex: number }[]): Cell[][] {
    
    for (let i = 0; i < mines.length; i++) {

        const y = mines[i].rowIndex;
        const x = mines[i].colIndex;

        incrementAdjacentCells(grid, gridWidth, gridHeight, y, x);
    }

    return grid;
}

function incrementAdjacentCells(grid: Cell[][], gridWidth: number, gridHeight: number, rowIndex: number, colIndex: number): void {

    for (let y = -1; y <= 1; y++) {
        
        for (let x = -1; y <= 1; x++) {

            const ySubgrid = rowIndex + y;
            const xSubgrid = colIndex + x;

            if (ySubgrid < 0 || ySubgrid >= gridHeight ||
                xSubgrid < 0 || xSubgrid >= gridWidth) continue;
            
            if (!grid[ySubgrid][xSubgrid].hasMine) {
                grid[ySubgrid][xSubgrid].adjacentMines++;
            }
        }
    }
}
