import colors from "./colors";

export function getRandomColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
