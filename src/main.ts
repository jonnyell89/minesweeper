import './style.scss'
import { MINE_COUNT } from './config';
import { attachGridEventListeners } from './events/attachGridEventListeners';
import { populateGrid } from './grid/populateGrid';
import { initDocumentRoot } from './init/initDocumentRoot';
import { initGrid } from './init/initGrid'
import { Cell } from './types/cell';
import { Mine } from './types/mine';
import { getMineCoordinates } from './utils/getMineCoordinates';
import { clearPlantedFlags, clearRevealedCells } from './state';

export function gameStart(): void {

    initDocumentRoot();

    const grid: Cell[][] = initGrid();

    const mines: Mine[] = getMineCoordinates(grid, MINE_COUNT);

    populateGrid(grid, mines);

    attachGridEventListeners(grid, mines);
}

export function gameReset(): void {

    // Reset state
    clearRevealedCells();
    clearPlantedFlags();

    // Reset timer

    // Reset counter

    // Reset grid
    gameStart();    
}

gameStart();
