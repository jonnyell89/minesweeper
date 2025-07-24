import { getPlantedFlagCount } from "../state";
import { selectElement } from "../utils/selectElement";

export function initCounter(): HTMLDivElement {

    const topContainerCounter = selectElement<HTMLDivElement>(".topContainer__counter");

    topContainerCounter.innerHTML = "";

    return topContainerCounter;
}

export function startCounter(topContainerCounter: HTMLDivElement, mineCount: number): void {
    
    topContainerCounter.textContent = mineCount.toString();
}

export function toggleCounter(topContainerCounter: HTMLDivElement, mineCount: number): void {

    topContainerCounter.textContent = `${mineCount - getPlantedFlagCount()}`;
}

export function clearCounter(topContainerCounter: HTMLDivElement): void {

    topContainerCounter.innerHTML = "";
}
