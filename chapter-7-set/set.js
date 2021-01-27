export default class Set {
  constructor() {
    this._items = {};
    this._count = 0;
  }

  get size() {
    return this._count;
  }

  get values() {
    let values = [];

    for (let key in this._items) {
      if (this._items.hasOwnProperty(key)) {
        values.push(this._items[key]);
      }
    }

    return values;
  }

  add(element) {
    if (!this.has(element)) {
      this._items[element] = element;
      this._count++;

      return true;
    }

    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this._items[element];
      this._count--;

      return true;
    }

    return false;
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this._items, element);
  }

  clear() {
    this._items = {};
    this._count = 0;
  }

  union(set) {
    const union = new Set();

    let values = set.values;

    for (let i = 0; i < set.size; i++) {
      union.add(values[i]);
    }

    values = this.values;

    for (let i = 0; i < this.size; i++) {
      union.add(values[i]);
    }

    return union;
  }

  intersection(set) {
    const intersection = new Set();

    let biggerSet = set;
    let smallerSet = this;

    if (this.size > set.size) {
      biggerSet = this;
      smallerSet = set;
    }

    const values = smallerSet.values;

    for (let i = 0; i < smallerSet.size; i++) {
      if (biggerSet.has(values[i])) {
        intersection.add(values[i]);
      }
    }

    return intersection;
  }

  difference(set) {
    const difference = new Set();
    const values = this.values;

    for (let i = 0; i < this.size; i++) {
      if (!set.has(values[i])) {
        difference.add(values[i]);
      }
    }

    return difference;
  }

  isSubsetOf(set) {
    if (this.size > set.size) {
      return false;
    }

    const values = this.values;

    let isSubset = true;

    for (let i = 0; i < this.size; i++) {
      if (!set.has(values[i])) {
        isSubset = false;
        break;
      }
    }

    return isSubset;
  }
}
