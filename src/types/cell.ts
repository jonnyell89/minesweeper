import { Flag } from "./flag";
import { Mine } from "./mine";

export interface Cell {
    cellElement: HTMLButtonElement;
    rowIndex: number;
    colIndex: number;
    isHidden: boolean;
    flag: Flag | null;
    mine: Mine | null;
    adjacentMines: number;
}
