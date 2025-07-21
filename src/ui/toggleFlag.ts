import { Cell } from "../types/cell";
import { Flag } from "../types/flag";
import { getFlag } from "../utils/getFlag";

export function toggleFlag(cell: Cell): void {

    console.log(`Before toggle: isHidden=${cell.isHidden}, hasFlag=${cell.flag !== null}, content=${cell.cellElement.textContent}`);

    if (cell.isHidden && cell.flag === null) {

        const newFlag: Flag = getFlag(cell.rowIndex, cell.colIndex);

        cell.flag = newFlag;
        cell.cellElement.textContent = newFlag.icon;

    } else if (cell.isHidden && cell.flag !== null) {

        cell.flag = null;
        cell.cellElement.textContent = "";
    
    }

    console.log(`After toggle: isHidden=${cell.isHidden}, hasFlag=${cell.flag !== null}, content=${cell.cellElement.textContent}`);
}
