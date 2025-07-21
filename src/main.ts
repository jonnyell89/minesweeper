import { MINE_COUNT } from './config';
import { initDocumentRoot } from './init/initDocumentRoot';
import { attachGridEventListeners, initGrid, populateGrid } from './init/initGrid'
import { remainingMines, setRemainingMines } from './state';
import './style.scss'
import { Cell } from './types/cell';
import { Mine } from './types/mine';
import { getMineCoordinates } from './utils/getMineCoordinates';

initDocumentRoot();

const grid: Cell[][] = initGrid();

const mines: Mine[] = getMineCoordinates(grid, MINE_COUNT);

populateGrid(grid, mines);

attachGridEventListeners(grid);

setRemainingMines(mines);

console.log(mines);

console.log(remainingMines);
