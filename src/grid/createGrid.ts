import type { Cell } from "../types/cell"

export function createGrid(gridElement: HTMLElement, gridWidth: number, gridHeight: number): Cell[][] {

    const grid: Cell[][] = [];

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

export function createCell(gridElement: HTMLElement, y: number, x: number): Cell {

    const cell = document.createElement("button");

    cell.classList.add("bottomContainer__btn");

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
