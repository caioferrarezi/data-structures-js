import StackLinkedList from './stack-linked-list.js';

describe('StackLinkedList', () => {
  let list;

  beforeEach(() => {
    list = new StackLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
  })

  test('isEmpty', () => {
    list = new StackLinkedList();

    expect(list.isEmpty).toBe(true);
  })

  test('size', () => {
    expect(list.size).toBe(3);
  })

  test('peek', () => {
    expect(list.peek).toBe(3);
  })

  test('pop', () => {
    expect(list.pop()).toBe(3);
  })
})
