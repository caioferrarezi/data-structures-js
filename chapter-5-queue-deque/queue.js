export default class Queue {
  constructor() {
    this._count = 0;
    this._lowestCount = 0;
    this._items = {};
  }

  get size() {
    return this._count - this._lowestCount;
  }

  get isEmpty() {
    return !this.size;
  }

  get peek() {
    if (this.isEmpty) return undefined;

    return this._items[this._lowestCount];
  }

  enqueue(element) {
    this._items[this._count] = element;
    this._count++;
  }

  dequeue() {
    if (this.isEmpty) return undefined;

    const result = this._items[this._lowestCount];

    delete this._items[this._lowestCount];

    this._lowestCount++;

    return result;
  }

  clear() {
    this._items = {};
    this._count = 0;
    this._lowestCount = 0
  }

  toString() {
    if (this.isEmpty) return '';

    let string = `${this._items[this._lowestCount]}`;

    for (let i = this._lowestCount + 1; i < this._count; i++) {
      string += `, ${this._items[i]}`;
    }

    return string;
  }
}
