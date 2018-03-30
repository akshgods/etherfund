export const increase = value => {
  type: "NUMBER_INCREMENT",
  value
}

export const decrease = value => {
  type: "NUMBER_DECREMENT",
  value
}
