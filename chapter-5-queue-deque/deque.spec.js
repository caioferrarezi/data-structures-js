import Deque from './deque.js'

describe('Deque', () => {
  let deque;

  beforeEach(() => {
    deque = new Deque();

    deque.addBack('John');
    deque.addBack('Jack');
    deque.addBack('Camila');
  })

  test('isEmpty', () => {
    expect(deque.isEmpty).toBe(false);

    deque.clear();

    expect(deque.isEmpty).toBe(true);
  })

  test('addFront', () => {
    deque = new Deque();

    deque.addFront('John');

    deque.addFront('Jack');

    expect(deque.toString()).toBe('Jack, John');

    deque.removeFront();

    deque.addFront('Camila');

    expect(deque.toString()).toBe('Camila, John');
  })

  test('removeFront', () => {
    expect(deque.removeFront()).toBe('John');
    expect(deque.removeFront()).toBe('Jack');
  })

  test('removeBack', () => {
    expect(deque.removeBack()).toBe('Camila');
    expect(deque.removeBack()).toBe('Jack');
  })

  test('peekFront', () => {
    expect(deque.peekFront).toBe('John');
  })

  test('peekBack', () => {
    expect(deque.peekBack).toBe('Camila');
  })

  test('size', () => {
    expect(deque.size).toBe(3);
  })

  test('toString', () => {
    expect(deque.toString()).toBe('John, Jack, Camila');
  })
})
