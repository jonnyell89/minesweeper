import { stopTimer } from "../init/initTimer";
import { toggleEndGame } from "../state";
import { Cell } from "../types/cell";
import { Mine } from "../types/mine";
import { resetButtonLose } from "../ui/resetButtonLose";
import { revealRemainingMines } from "./revealRemainingMines";

export function hasLost(revealedCells: Cell[]): boolean {

    return revealedCells.some(revealedCell => revealedCell.mine !== null)
}

export function isLost(grid: Cell[][]): boolean {

    return grid.some(row => 

        row.some(cell => !cell.isHidden && cell.mine !== null)
    )
}

export function playerHasLost(grid: Cell[][], mines: Mine[], topContainerButton: HTMLButtonElement): void {
    
    revealRemainingMines(grid, mines);

    resetButtonLose(topContainerButton);

    toggleEndGame();

    stopTimer();
}
