export function getRandomElement<T>(arr: T[]): T {
    const val = arr[Math.floor(Math.random() * arr.length)];
    assert(val !== undefined, "Array should not be empty");
    return val;
}

export function assert(condition: any, message?: string): asserts condition {
    if (!condition) {
        throw new Error(message);
    }
}
