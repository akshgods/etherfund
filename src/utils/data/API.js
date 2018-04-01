import items from "./items"

export function fetchData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(items);
    }, 2000);
  });
}