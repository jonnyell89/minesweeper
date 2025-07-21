import { MINE_COUNT } from './config';
import { initDocumentRoot } from './init/initDocumentRoot';
import { initGrid } from './init/initGrid'
import './style.scss'
import { Cell } from './types/cell';
import { Mine } from './types/mine';
import { getMineCoordinates } from './utils/getMineCoordinates';

initDocumentRoot();

const grid: Cell[][] = initGrid();

const mines: Mine[] = getMineCoordinates(grid, MINE_COUNT);

