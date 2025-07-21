import { Cell } from "../types/cell";

export function pressedButton(cell: Cell): void {

    cell.cellElement.classList.add("pressed-button");
}



// export function pressedButton(cell: Cell): void {
//     cell.cellElement.style.backgroundColor = "#384048";
//     cell.cellElement.style.borderTop = "none";
//     cell.cellElement.style.borderRight = "none";
//     cell.cellElement.style.borderBottom = "none";
//     cell.cellElement.style.borderLeft = "none";
// }
