export class Stack {
  constructor() {
    this._count = 0;
    this._items = {};
  }

  get size() {
    return this._count;
  }

  get isEmpty() {
    return !this._count;
  }

  get peek() {
    if (this.isEmpty) return undefined;

    return this._items[this._count - 1];
  }

  push(element) {
    this._items[this._count] = element;
    this._count++;
  }

  pop() {
    if (this.isEmpty) return undefined;

    const result = this._items[--this._count];
    delete this._items[this._count];

    return result;
  }

  clear() {
    this._items = {};
    this._count = 0;
  }

  toString() {
    if (this.isEmpty) return '';

    let string = `${this._items[0]}`;

    for (let i = 1; i < this._count; i++)
      string = `${string}, ${this._items[i]}`;

    return string;
  }
}
