import { defaultEquals } from '../utils/default-equals.js';
import { defaultCompare } from '../utils/default-compare.js';

import LinkedList from './linked-list.js';
import { Node } from '../models/linked-list.js';

export default class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this._compareFn = compareFn;
  }

  push(element) {
    this.insert(element);
  }

  insert(element) {
    if (this.isEmpty) {
      return super.insert(element, 0);
    }

    const index = this.getIndexNextSortedElement(element);
    return super.insert(element, index);
  }

  getIndexNextSortedElement(element) {
    let current = this._head;
    let i = 0;

    for (i = 0; i < this._count && current !== null; i++) {
      if (this._compareFn(element, current.element) < 0) {
        return i;
      }

      current = current.next;
    }

    return i;
  }
}
