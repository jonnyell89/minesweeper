import { addFlagToPlantedFlags, getPlantedFlagCount, removeFlagFromPlantedFlags } from "../state";
import { Cell } from "../types/cell";
import { Flag } from "../types/flag";
import { getFlag } from "../utils/getFlag";

export function toggleFlag(cell: Cell): void {

    if (!cell.isHidden) return;

    if (cell.flag === null) {

        const flag: Flag = getFlag(cell.rowIndex, cell.colIndex);

        cell.flag = flag;
        cell.cellElement.textContent = flag.icon;

        addFlagToPlantedFlags(cell.flag);

        console.log(`In toggle function: ${getPlantedFlagCount()}`);

    } else if (cell.flag !== null) {

        removeFlagFromPlantedFlags(cell.flag);

        console.log(`In toggle function ${getPlantedFlagCount()}`);

        cell.flag = null;
        cell.cellElement.textContent = "";
    }
}
