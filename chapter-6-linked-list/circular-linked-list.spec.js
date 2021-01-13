import CircularLinkedList from './circular-linked-list.js'

describe('CircularLinkedList', () => {
  let list;

  beforeEach(() => {
    list = new CircularLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
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

    list.insert(4, list.size);

    expect(list.toString()).toBe('1, 2, 3, 4');

    list.insert(5, 3);

    expect(list.toString()).toBe('1, 2, 3, 5, 4');
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

  test('last element points to head', () => {
    const head = list.getElementAt(0);
    const current = list.getElementAt(list.size - 1);

    expect(current.next).toEqual(head);
  })
})
