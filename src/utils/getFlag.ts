import { Flag } from "../types/flag";

export function getFlag(y: number, x: number): Flag {

    return { rowIndex: y, colIndex: x, icon: "🚩"}
}
