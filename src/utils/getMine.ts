import { Mine } from "../types/mine";

export function getMine(y: number, x: number): Mine {
    
    return { rowIndex: y, colIndex: x }
}
