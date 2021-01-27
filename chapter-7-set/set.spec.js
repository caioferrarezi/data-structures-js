import Set from './set.js';

describe('Set', () => {
  let set;

  beforeEach(() => {
    set = new Set();

    set.add(1);
    set.add(2);
    set.add(3);
  })

  test('add', () => {
    expect(set.add(1)).toBe(false)
  })

  test('values', () => {
    expect(set.values).toEqual([1, 2, 3]);
  })

  test('has', () => {
    expect(set.has(1)).toBe(true);
  })

  test('size', () => {
    expect(set.size).toBe(3);
  })

  test('delete', () => {
    expect(set.delete(2)).toBe(true);
  })

  test('clear', () => {
    set.clear()

    expect(set.size).toEqual(0);
    expect(set.values).toEqual([]);
  })

  test('union', () => {
    const otherSet = new Set();

    otherSet.add(3);
    otherSet.add(4);
    otherSet.add(5);

    const union = set.union(otherSet);

    expect(union.values).toEqual([1, 2, 3, 4, 5]);
  })

  test('intersection', () => {
    const otherSet = new Set();

    otherSet.add(2);
    otherSet.add(3);
    otherSet.add(4);

    const intersection = set.intersection(otherSet);

    expect(intersection.values).toEqual([2, 3]);
  })

  test('difference', () => {
    const otherSet = new Set();

    otherSet.add(3);
    otherSet.add(4);
    otherSet.add(5);

    let difference = set.difference(otherSet);

    expect(difference.values).toEqual([1, 2]);

    difference = otherSet.difference(set);

    expect(difference.values).toEqual([4, 5]);
  })

  test('isSubsetOf', () => {
    const otherSet = new Set();

    otherSet.add(1);
    otherSet.add(2);

    expect(otherSet.isSubsetOf(set)).toBe(true);
    expect(set.isSubsetOf(otherSet)).toBe(false);

    otherSet.add(3);
    otherSet.add(4);

    expect(otherSet.isSubsetOf(set)).toBe(false);
    expect(set.isSubsetOf(otherSet)).toBe(true);
  })
})
