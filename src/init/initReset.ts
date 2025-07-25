import { clearPlantedFlags, clearRevealedCells, resetGame } from "../state";
import { selectElement } from "../utils/selectElement";
import { clearCounter } from "./initCounter";
import { initMinesweeper } from "./initMinesweeper";
import { clearTimer, stopTimer } from "./initTimer";

export function initReset(): HTMLButtonElement {

    const topContainerButton = selectElement<HTMLButtonElement>(".topContainer__btn");

    topContainerButton.innerHTML = "";

    return topContainerButton;
}

export function attachResetClickEvent(topContainerButton: HTMLButtonElement, topContainerCounter: HTMLDivElement, topContainerTimer: HTMLDivElement): void {

    topContainerButton.addEventListener("click", () => handleResetClickEvent(topContainerCounter, topContainerTimer)); // Attach -> Handle
}

export function handleResetClickEvent(topContainerCounter: HTMLDivElement, topContainerTimer: HTMLDivElement): void {

    stopTimer();

    clearCounter(topContainerCounter);
    clearTimer(topContainerTimer);

    clearRevealedCells();
    clearPlantedFlags();

    resetGame();

    initMinesweeper();
}
