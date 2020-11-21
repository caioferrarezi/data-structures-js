import decimalToBinary from './decimal-to-binary.js';

describe('decimalToBinary', () => {
  test('it converts decimal to binary', () => {
    expect(decimalToBinary(0)).toBe('0');
    expect(decimalToBinary(1)).toBe('1');
    expect(decimalToBinary(2)).toBe('10');
    expect(decimalToBinary(3)).toBe('11');
    expect(decimalToBinary(4)).toBe('100');
    expect(decimalToBinary(5)).toBe('101');
    expect(decimalToBinary(6)).toBe('110');
    expect(decimalToBinary(7)).toBe('111');
    expect(decimalToBinary(8)).toBe('1000');
    expect(decimalToBinary(9)).toBe('1001');
    expect(decimalToBinary(10)).toBe('1010');

    expect(decimalToBinary(233)).toBe('11101001');
    expect(decimalToBinary(1000)).toBe('1111101000');
  })
})
