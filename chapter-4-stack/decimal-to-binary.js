import { Stack } from "./stack.js";

export default function (number) {
  if (!number) return '0';

  const stack = new Stack();

  let binaryString = '';

  while(number > 0) {
    stack.push(Math.floor(number % 2));
    number = Math.floor(number / 2);
  }

  while(!stack.isEmpty) {
    binaryString += stack.pop().toString();
  }

  return binaryString;
}
