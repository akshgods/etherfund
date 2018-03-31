export function increase(value) {
  return {
    type: "NUMBER_INCREMENT",
    value
  };
} 

export function decrease(value) {
  return {
    type: "NUMBER_DECREMENT",
    value
  };
}
