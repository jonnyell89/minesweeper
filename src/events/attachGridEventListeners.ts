import { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { attachLeftClickEvent } from "./attachLeftClickEvent";
import { attachRightClickEvent } from "./attachRightClickEvent";

export function attachGridEventListeners(grid: Cell[][], mines: Mine[]): void {

    attachLeftClickEvent(grid, mines);

    attachRightClickEvent(grid);
}
