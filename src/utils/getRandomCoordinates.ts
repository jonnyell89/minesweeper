export function getRandomCoordinates(gridWidth: number, gridHeight: number): [number, number] {

    const yRandom: number = Math.floor(Math.random() * gridHeight);
    const xRandom: number = Math.floor(Math.random() * gridWidth);

    return [yRandom, xRandom];
}
