import { Cell } from "../types/cell";
import { Flag } from "../types/flag";
import { getFlag } from "../utils/getFlag";

export function revealFlag(cell: Cell): void {

    if (cell.flag === null) {

        const newFlag: Flag = getFlag(cell.rowIndex, cell.colIndex);

        cell.flag = newFlag;

        cell.cellElement.textContent = newFlag.icon;
    }
}
