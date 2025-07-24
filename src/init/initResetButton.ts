import { clearPlantedFlags, clearRevealedCells } from "../state";
import { selectElement } from "../utils/selectElement";
import { clearCounter } from "./initCounter";
import { initMinesweeper } from "./initMinesweeper";
import { clearTimer, stopTimer } from "./initTimer";

export function initResetButton(): HTMLButtonElement {

    const topContainerButton = selectElement<HTMLButtonElement>(".topContainer__btn");

    topContainerButton.innerHTML = "";

    return topContainerButton;
}

export function attachResetClickEvent(topContainerButton: HTMLButtonElement, topContainerTimer: HTMLDivElement, topContainerCounter: HTMLDivElement): void {

    topContainerButton.addEventListener("click", () => handleResetClickEvent(topContainerTimer, topContainerCounter)); // Attach -> Handle
}

export function handleResetClickEvent(topContainerTimer: HTMLDivElement, topContainerCounter: HTMLDivElement): void {

    stopTimer();

    clearTimer(topContainerTimer);
    clearCounter(topContainerCounter);

    clearRevealedCells();
    clearPlantedFlags();

    initMinesweeper();
}
