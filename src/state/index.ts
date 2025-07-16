export let startGame = false;
export let endGame = false;

export let flagCount = 0;

export function getFlagCount(): number {
    return flagCount;
}

export function incrementFlagCount(): void {
    flagCount++;
}

export function decrementFlagCount(): void {
    flagCount--;
}
