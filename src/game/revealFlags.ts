import { Cell } from "../types/cell";
import { revealFlag } from "../ui/revealFlag";

export function revealFlags(grid: Cell[][]): void {

    grid.forEach(row => {

        row.forEach(cell => {

            if (cell.isHidden && cell.mine !== null) {
                
                revealFlag(cell);
            }
        })
    })
}

// export function revealFlags(grid: Cell[][]): void {
//     for (let y = 0; y < grid.length; y++) {
//         for (let x = 0; x < grid[0].length; x++) {
//             const cell: Cell | null = getCell(grid, y, x);
//             if (!cell) continue;
//             if (cell.isHidden && cell.hasMine) revealFlag(cell);
//         }
//     }
// }
