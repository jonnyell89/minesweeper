import { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { attachLeftClickEvent } from "./attachLeftClickEvent";
import { attachRightClickEvent } from "./attachRightClickEvent";

export function attachGridEvents(grid: Cell[][], mines: Mine[], topContainerButton: HTMLButtonElement, topContainerCounter: HTMLDivElement, topContainerTimer: HTMLDivElement): void {

    attachLeftClickEvent(grid, mines, topContainerButton, topContainerCounter, topContainerTimer);

    attachRightClickEvent(grid, topContainerCounter);
}
