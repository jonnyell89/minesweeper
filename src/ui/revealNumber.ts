import { Cell } from "../types/cell";

export function revealNumber(cell: Cell): void {

    cell.cellElement.textContent = `${cell.adjacentMines}`;

    switch (cell.adjacentMines) {
        
        case 1:
            cell.cellElement.style.color = "#0000ff";
            break;
        case 2:
            cell.cellElement.style.color = "#008200";
            break;
        case 3:
            cell.cellElement.style.color = "#ff0000";
            break;
        case 4:
            cell.cellElement.style.color = "#000084";
            break;
        case 5:
            cell.cellElement.style.color = "#840000";
            break;
        case 6:
            cell.cellElement.style.color = "#008284";
            break;
        case 7:
            cell.cellElement.style.color = "#840084";
            break;
        case 8:
            cell.cellElement.style.color = "#757575";
            break;
        default:
            cell.cellElement.style.color = "black";
    }    
}
