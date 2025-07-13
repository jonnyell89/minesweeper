import { Cell } from "../types/cell";
import { Mine } from "../types/mine";

export function assignNumbers(grid: Cell[][], mines: Mine[]): Cell[][] {
    
    for (let i = 0; i < mines.length; i++) {

        const y: number = mines[i].rowIndex;
        const x: number = mines[i].colIndex;

        incrementAdjacentMines(grid, y, x);
    }

    return grid;
}

function incrementAdjacentMines(grid: Cell[][], rowIndex: number, colIndex: number): void {

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
