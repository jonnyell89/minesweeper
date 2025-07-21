import { Cell } from "../types/cell";

export function toggleFlag(cell: Cell): void {

    console.log(`Before toggle: isHidden=${cell.isHidden}, hasFlag=${cell.flag !== null}, content=${cell.cellElement.textContent}`);

    if (cell.isHidden && cell.flag === null) {

        cell.cellElement.textContent = "🚩";
        cell.hasFlag = true;
        incrementFlagCount();

    } else if (cell.isHidden && cell.flag !== null) {

        cell.cellElement.textContent = "";
        cell.hasFlag = false;        
        decrementFlagCount();
    
    }

    console.log(`After toggle: isHidden=${cell.isHidden}, hasFlag=${cell.flag !== null}, content=${cell.cellElement.textContent}`);
}
