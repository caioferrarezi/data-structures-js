import Queue from './queue.js';

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();

    queue.enqueue('John');
    queue.enqueue('Jack');
    queue.enqueue('Camila');
  })

  test('isEmpty', () => {
    expect(queue.isEmpty).toBe(false);

    queue.clear();

    expect(queue.isEmpty).toBe(true);
  })

  test('dequeue', () => {
    expect(queue.dequeue()).toBe('John');
    expect(queue.dequeue()).toBe('Jack');
  })

  test('size', () => {
    expect(queue.size).toBe(3);
  })

  test('peek', () => {
    expect(queue.peek).toBe('John');

    queue.dequeue();
    expect(queue.peek).toBe('Jack');
  })

  test('toString', () => {
    expect(queue.toString()).toBe('John, Jack, Camila');
  })
})
