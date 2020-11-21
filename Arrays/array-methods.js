// concat
  const zero = 0;
  const positiveNumbers = [1, 2, 3];
  const negativeNumbers = [-1, -2, -3];

  console.log(negativeNumbers.concat(zero, positiveNumbers));

// iteration
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // function isEven(x) {
  //   console.log(x);
  //   return (x % 2 === 0);
  // }
  const isEven = x => x % 2 === 0

  console.log(numbers.every(isEven)) // false
  console.log(numbers.some(isEven)) // true
  numbers.forEach(x => console.log(x % 2 === 0))
  console.log(numbers.map(isEven))
  console.log(numbers.filter(isEven))
  console.log(numbers.reduce((previous, current) => previous + current))

// for...of
  for (const n of numbers) {
    console.log(n % 2 === 0 ? 'even' : 'odd')
  }

  let iterator = numbers[Symbol.iterator]();
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);

  iterator = numbers[Symbol.iterator]();
  for (const n of iterator) {
    console.log(n)
  }

// entries, keys, values
  let aEntries = numbers.entries();
  console.log(aEntries.next().value);
  console.log(aEntries.next().value);
  console.log(aEntries.next().value);
  console.log(aEntries.next().value);
  console.log(aEntries.next().value);

  let aKeys = numbers.keys();
  console.log(aKeys.next());
  console.log(aKeys.next());
  console.log(aKeys.next());
  console.log(aKeys.next());
  console.log(aKeys.next());

// from
  let numbers2 = Array.from(numbers);
  let evens = Array.from(numbers, isEven);

// of
  let numbers3 = Array.of(1);
  let numbers4 = Array.of(1, 2, 3, 4, 5, 6);
  let numbersCopy = Array.of(...numbers4);

// fill
  numbersCopy.fill(0)
  numbersCopy.fill(2, 1)
  numbersCopy.fill(1, 3, 5)

  let ones = Array(6).fill(1)

// copyWithin
  let copyArray = [1, 2, 3, 4, 5, 6]
  copyArray.copyWithin(0, 3)
  copyArray.copyWithin(1, 3, 5)

// sorting
  numbers.reverse()
  numbers.sort()
  numbers.sort((a, b) => a - b)

  const friends = [
    { name: 'john', age: 30 },
    { name: 'ana', age: 20 },
    { name: 'chris', age: 25 }
  ];

  function comparePerson(a, b) {
    if (a.age < b.age) {
      return - 1
    }

    if (a.age > b.age) {
      return 1
    }

    return 0
  }

  console.log(friends.sort(comparePerson))

// TypedArray

  let int16 = new Int16Array(5)
