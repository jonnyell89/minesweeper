import { revealCell } from "../grid/revealCells";
import { Cell } from "../types/cell";
import { Flag } from "../types/flag";
import { getFlag } from "../utils/getFlag";

export function revealFlag(cell: Cell): void {

    revealCell(cell);

    if (cell.mine !== null && cell.flag === null) {

        const flag: Flag = getFlag(cell.rowIndex, cell.colIndex);

        cell.flag = flag;

        cell.cellElement.textContent = flag.icon;
        cell.cellElement.classList.add("revealed-flag");
    }
}
