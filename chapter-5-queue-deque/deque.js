export default class Deque {
  constructor() {
    this._items = {};
    this._count = 0;
    this._lowestCount = 0;
  }

  get isEmpty() {
    return !this.size;
  }

  get size() {
    return this._count - this._lowestCount;
  }

  get peekFront() {
    if (this.isEmpty) return undefined;

    return this._items[this._lowestCount];
  }

  get peekBack() {
    if (this.isEmpty) return undefined;

    return this._items[this._count - 1];
  }

  addFront(element) {
    if (this.isEmpty) {
      this.addBack(element);
    } else if (this._lowestCount > 0) {
      this._items[--this._lowestCount] = element;
    } else {
      for (let i = this._count; i > 0; i--) {
        this._items[i] = this._items[i - 1];
      }

      this._count++;
      this._lowestCount = 0;
      this._items[this._lowestCount] = element;
    }
  }

  addBack(element) {
    this._items[this._count++] = element;
  }

  removeFront() {
    if (this.isEmpty) return undefined;

    const result = this._items[this._lowestCount];
    delete this._items[this._lowestCount++];
    return result;
  }

  removeBack() {
    if (this.isEmpty) return undefined;

    const result = this._items[--this._count];
    delete this._items[this._count];
    return result;
  }

  clear() {
    this._items = {};
    this._count = 0;
    this._lowestCount = 0;
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
