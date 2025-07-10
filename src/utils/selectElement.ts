export function selectElement<T extends HTMLElement>(elementSelector: string): T {

    const element = document.querySelector<T>(elementSelector); // Select

    if (!element) {
        throw new Error(`${elementSelector} did not render.`); // Throw
    }

    return element; // Action
}

export function selectContainerElement<T extends HTMLElement>(container: HTMLElement, elementSelector: string): T {

    const containerElement = container.querySelector<T>(elementSelector); // Select

    if (!containerElement) {
        throw new Error(`${elementSelector} did not render.`); // Throw
    }

    return containerElement; // Action
}
