import { Stack } from "./stack.js";

const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function (number, base) {
  if (!number) return '0';
  if (base < 2 || base > 36) throw new Error ('Base must be between 2 and 36');

  const stack = new Stack();

  let string = '';

  while (number > 0) {
    stack.push(Math.floor(number % base));
    number = Math.floor(number / base);
  }

  while (!stack.isEmpty)
    string += digits[stack.pop()];

  return string;
}
