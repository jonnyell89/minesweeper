import { Cell } from "../types/cell";

export function assignAdjacentNumbers(grid: Cell[][], mines: { rowIndex: number, colIndex: number }[]): Cell[][] {
    
    for (let i = 0; i < mines.length; i++) {

        const y = mines[i].rowIndex;
        const x = mines[i].colIndex;

        incrementAdjacentCells(grid, y, x);
    }

    return grid;
}

function incrementAdjacentCells(grid: Cell[][], rowIndex: number, colIndex: number): void {

    for (let y = -1; y <= 1; y++) {
        
        for (let x = -1; x <= 1; x++) {

            const ySubgrid = rowIndex + y;
            const xSubgrid = colIndex + x;

            if (ySubgrid < 0 || ySubgrid >= grid.length ||
                xSubgrid < 0 || xSubgrid >= grid[0].length) continue;

            const cell = grid[ySubgrid][xSubgrid];
            
            if (!cell.hasMine) cell.adjacentMines++;
        }
    }
}
