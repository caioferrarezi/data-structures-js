interface Person {
  name: string;
  age: number;
}

const friends: Person[] = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 }
]

function comparePerson(a: Person, b: Person) {
  return a.age - b.age
}
