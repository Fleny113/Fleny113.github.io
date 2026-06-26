export function getRandomElement<T>(arr: T[]): T {
    const val = arr[Math.floor(Math.random() * arr.length)];
    assert(val !== undefined, "Array should not be empty");
    return val;
}

export function assert(condition: unknown, message?: string): asserts condition {
    if (!condition) {
        const error = new Error(message);
        // We do ?. just in case some browsers don't support it, but it should be fine in modern browsers.
        Error.captureStackTrace?.(error, assert);
        throw error;
    }
}
