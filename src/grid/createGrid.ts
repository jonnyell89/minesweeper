import type { Cell } from "../types/cell"

export function createGrid(gridElement: HTMLElement, gridWidth: number, gridHeight: number): Cell[][] {
    
    const grid: Cell[][] = [];

    gridElement.innerHTML = "";

    for (let y = 0; y < gridHeight; y++) {

        const row: Cell[] = [];

        for (let x = 0; x < gridWidth; x++) {

            const cell: Cell = createCell(gridElement, y, x);

            row.push(cell);
        }

        grid.push(row);
    }

    return grid;
}

function createCell(gridElement: HTMLElement, y: number, x: number): Cell {

    const cell: HTMLButtonElement = document.createElement("button");

    cell.classList.add("bottomContainer__btn");

    cell.dataset.row = y.toString(); // Sets dataset attributes.
    cell.dataset.col = x.toString(); // Sets dataset attributes.

    gridElement.appendChild(cell);

    return {
        cellElement: cell, 
        rowIndex: y, 
        colIndex: x, 
        isHidden: true, 
        hasFlag: false, 
        hasMine: false, 
        adjacentMines: 0,
    }
}
