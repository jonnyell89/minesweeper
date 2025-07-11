export function getRandomCoordinates(gridWidth: number, gridHeight: number): [number, number] {

    const yRandom = Math.floor(Math.random() * gridHeight);
    const xRandom = Math.floor(Math.random() * gridWidth);

    return [yRandom, xRandom];
}
