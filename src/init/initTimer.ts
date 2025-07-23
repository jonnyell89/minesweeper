import { selectElement } from "../utils/selectElement";

export let timeInterval: number;
export let timeUnit: number = 1;

export function initTimer(): HTMLDivElement {

    const topContainerTimer = selectElement<HTMLDivElement>(".topContainer__timer"); // Select

    topContainerTimer.innerHTML = ""; // Clear

    return topContainerTimer;
}

export function startTimer(topContainerTimer: HTMLDivElement): void {

    stopTimer();

    topContainerTimer.textContent = timeUnit.toString();

    timeInterval = setInterval(() => {

        timeUnit++;

        topContainerTimer.textContent = timeUnit.toString();
        
    }, 1000);
}

export function stopTimer(): void {

    clearInterval(timeInterval);
}

export function clearTimer(topContainerTimer: HTMLDivElement): void {

    topContainerTimer.innerHTML = "";
}
