import { selectElement } from "../utils/selectElement";

export let timeInterval: ReturnType<typeof setInterval>;
export let timeUnit: number = 0;

export function initTimer(): HTMLDivElement {

    const topContainerTimer = selectElement<HTMLDivElement>(".topContainer__timer"); // Select

    topContainerTimer.innerHTML = ""; // Clear

    return topContainerTimer;
}

export function setTimer(topContainerTimer: HTMLDivElement): void {

    topContainerTimer.textContent = timeUnit.toString();
}

export function startTimer(topContainerTimer: HTMLDivElement): void {

    stopTimer();

    timeInterval = setInterval(() => {

        timeUnit++;

        topContainerTimer.textContent = timeUnit.toString();
        
    }, 1000);
}

export function stopTimer(): void {

    clearInterval(timeInterval);
}

export function clearTimer(topContainerTimer: HTMLDivElement): void {

    timeUnit = 0;
    
    topContainerTimer.innerHTML = "";
}
