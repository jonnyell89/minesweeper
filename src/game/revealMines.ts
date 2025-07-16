import { Cell } from "../types/cell";
import { revealMine } from "../ui/revealMine";

export function revealMines(grid: Cell[][]): void {

    grid.forEach(row => {

        row.forEach(cell => {

            if (cell.hasMine) {
                
                revealMine(cell);
            }
        })
    })
}

// export function revealMines(grid: Cell[][]): void {
//     for (let y = 0; y < grid.length; y++) {
//         for (let x = 0; x < grid[0].length; x++) {
//             const cell: Cell | null = getCell(grid, y, x);
//             if (!cell) continue;
//             if (cell.hasMine) revealMine(cell);
//         }
//     }
// }
