import items from "./items"

export function fetchData() {
    return Promise.resolve(items);
}