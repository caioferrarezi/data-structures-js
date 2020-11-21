import { Stack } from './stack-array.js'

describe('Stack with Array', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();

    stack.push(5);
    stack.push(8);
  })

  test('isEmpty', () => {
    expect(stack.isEmpty()).toBe(false);

    stack.clear();

    expect(stack.isEmpty()).toBe(true);
  })

  test('size', () => {
    expect(stack.size()).toBe(2);
  })

  test('peek', () => {
    stack.push(11);
    expect(stack.peek()).toBe(11);

    stack.push(15);
    expect(stack.peek()).toBe(15);
  })

  test('pop', () => {
    stack.push(11);
    stack.push(15);

    expect(stack.pop()).toBe(15);
    expect(stack.pop()).toBe(11);
  })
})
