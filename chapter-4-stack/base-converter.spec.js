import baseConverter from './base-converter.js';

describe('baseConverter', () => {
  test('it converts decimal to the given base', () => {
    expect(baseConverter(100345, 2)).toBe('11000011111111001');
    expect(baseConverter(100345, 8)).toBe('303771');
    expect(baseConverter(100345, 10)).toBe('100345');
    expect(baseConverter(100345, 16)).toBe('187F9');
    expect(baseConverter(100345, 35)).toBe('2BW0');

    expect(() => baseConverter(100345, 37))
      .toThrow(new Error('Base must be between 2 and 36'));
  })
})
