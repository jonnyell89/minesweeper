import { addFlagToPlantedFlags, getPlantedFlagCount, removeFlagFromPlantedFlags } from "../state";
import { Cell } from "../types/cell";
import { Flag } from "../types/flag";
import { getFlag } from "../utils/getFlag";

export function addFlagToGrid(cell: Cell): void {

    if (!cell.isHidden) return;

    if (cell.flag === null) {

        const flag: Flag = getFlag(cell.rowIndex, cell.colIndex);

        cell.flag = flag;
        cell.cellElement.textContent = flag.icon;

        addFlagToPlantedFlags(cell.flag); // Update state

        console.log(`Flag added to grid[${cell.rowIndex}][${cell.colIndex}] -> plantedFlagCount: ${getPlantedFlagCount()}`);
    } 
    
    else {console.log(`Flag not added to grid[${cell.rowIndex}][${cell.colIndex}] -> plantedFlagCount: ${getPlantedFlagCount()}`)};
}

export function removeFlagFromGrid(cell: Cell): void {

    if (!cell.isHidden) return;

    if (cell.flag !== null) {

        removeFlagFromPlantedFlags(cell.flag); // Update state

        console.log(`Flag removed from grid[${cell.rowIndex}][${cell.colIndex}] -> plantedFlagCount: ${getPlantedFlagCount()}`);

        cell.flag = null;
        cell.cellElement.textContent = "";
    }

    else {console.log(`Flag not removed from grid[${cell.rowIndex}][${cell.colIndex}] -> plantedFlagCount: ${getPlantedFlagCount()}`)};
}

// export function toggleFlag(cell: Cell): void {
//     if (!cell.isHidden) return;
//     if (cell.flag === null) {
//         const flag: Flag = getFlag(cell.rowIndex, cell.colIndex);
//         cell.flag = flag;
//         cell.cellElement.textContent = flag.icon;
//         addFlagToPlantedFlags(cell.flag);
//     } else if (cell.flag !== null) {
//         removeFlagFromPlantedFlags(cell.flag);
//         cell.flag = null;
//         cell.cellElement.textContent = "";
//     }
// }
