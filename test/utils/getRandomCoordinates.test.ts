import { getRandomCoordinates } from "../../src/utils/getRandomCoordinates";

describe("getRandomCoordinates", () => {

    const gridWidth = 9;
    const gridHeight = 9;

    it("returns random coordinates within bounds", () => {
        
        for (let i = 0; i < 100; i++) {

            const [yRandom, xRandom] = getRandomCoordinates(gridWidth, gridHeight);

            expect(yRandom).toBeGreaterThanOrEqual(0);
            expect(yRandom).toBeLessThan(gridHeight);

            expect(xRandom).toBeGreaterThanOrEqual(0);
            expect(xRandom).toBeLessThan(gridWidth);
        }
    })

    it("returns a tuple of two random coordinates", () => {

        const result = getRandomCoordinates(gridWidth, gridHeight);
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(2);
        expect(typeof result[0]).toBe("number");
        expect(typeof result[1]).toBe("number");        
    })
})
