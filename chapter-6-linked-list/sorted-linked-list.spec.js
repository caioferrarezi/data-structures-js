import SortedLinkedList from './sorted-linked-list.js'

describe('SortedLinkedList', () => {
  let list;

  beforeEach(() => {
    list = new SortedLinkedList();

    list.push(3);
    list.push(1);
    list.push(2);
  })

  test('isEmpty', () => {
    expect(list.isEmpty).toBe(false);

    list.clear();

    expect(list.isEmpty).toBe(true);
  })

  test('size', () => {
    expect(list.size).toBe(3)
  })

  test('head', () => {
    expect(list.head).toBe(1)
  })

  test('insert', () => {
    expect(list.toString()).toBe('1, 2, 3');

    list.insert(6);

    expect(list.toString()).toBe('1, 2, 3, 6');

    list.insert(5);

    expect(list.toString()).toBe('1, 2, 3, 5, 6');
  })

  test('removeAt', () => {
    expect(list.removeAt(0)).toBe(1)
    expect(list.removeAt(1)).toBe(3)

    expect(list.toString()).toBe('2');
  })

  test('remove', () => {
    expect(list.remove(2)).toBe(2);

    expect(list.toString()).toBe('1, 3');
  })

  test('indexOf', () => {
    expect(list.indexOf(2)).toBe(1);
    expect(list.indexOf(3)).toBe(2);
  })
})
