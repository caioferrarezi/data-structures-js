import palindromeChecker from './palindrome-checker.js';

describe('palindromeChecker', () => {
  test('it checks a palindrome word', () => {
    expect(palindromeChecker('a')).toBe(true);
    expect(palindromeChecker('aa')).toBe(true);
    expect(palindromeChecker('kayak')).toBe(true);
    expect(palindromeChecker('level')).toBe(true);
    expect(palindromeChecker('arara')).toBe(true);
    expect(palindromeChecker('Was it a car or a cat I saw')).toBe(true);
    expect(palindromeChecker('Step on no pets')).toBe(true);

    expect(palindromeChecker('')).toBe(false);
    expect(palindromeChecker(null)).toBe(false);
    expect(palindromeChecker(undefined)).toBe(false);
    expect(palindromeChecker('abajur')).toBe(false);
  })
})
