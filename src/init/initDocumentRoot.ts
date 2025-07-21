import { CELL_SIZE, GRID_HEIGHT, GRID_WIDTH } from "../config";

export function initDocumentRoot(): void {

    const documentRoot = document.documentElement;

    if (!documentRoot) {
        throw new Error("documentRoot did not render.");
    }

    documentRoot.style.setProperty("--grid-width", GRID_WIDTH.toString());
    documentRoot.style.setProperty("--grid-height", GRID_HEIGHT.toString());
    documentRoot.style.setProperty("--cell-size", CELL_SIZE);
}
