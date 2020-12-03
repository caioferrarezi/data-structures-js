import { defaultEquals } from '../utils/default-equals.js';
import { Node } from '../models/linked-list.js';

export default class LinkedList {
  constructor(equalsfn = defaultEquals) {
    this._count = 0;
    this._head = null;
    this._equalsfn = equalsfn;
  }

  get size() {
    return this._count;
  }

  get isEmpty() {
    return !this._count;
  }

  get head() {
    return this._head.element;
  }

  push(element) {
    const node = new Node(element);

    if (this._head === null) {
      this._head = node;
    } else {
      let current = this._head;

      while(current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    this._count++;
  }

  insert(element, index) {
    const node = new Node(element);

    let current = this._head;
    let previous;

    if (index === 0) {
      node.next = current;
      this._head = node;
    } else if (index > 0 && index <= this._count) {
      previous = this.getElementAt(index - 1);
      current = previous.next;

      // node is inserted between previous and current
      node.next = current;
      previous.next = node;
    } else {
      return false;
    }

    this._count++;
    return true;
  }

  removeAt(index) {
    let current = this._head;

    if (index === 0) {
      this._head = this._head.next;
    } else if (index > 0 && index <= this._count) {
      let previous = this.getElementAt(index - 1);
      current = previous.next;

      previous.next = current.next;
    } else {
      return undefined;
    }

    this._count--;
    return current.element;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index)
  }

  indexOf(element) {
    let current = this._head;
    let index = 0;

    while (current !== null) {
      if (this._equalsfn(element, current.element)) {
        return index;
      }

      index++;
      current = current.next;
    }

    return -1;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this._count) {
      let node = this._head;

      for (let i = 0; i < index && node !== null; i++) {
        node = node.next;
      }

      return node;
    }

    return undefined;
  }

  toString() {
    if (this._head === null) return '';

    let string = `${this._head.element}`;
    let current = this._head.next;

    for (let i = 0; i < this._count && current !== null; i++) {
      string = `${string}, ${current.element}`;
      current = current.next;
    }

    return string;
  }

  clear() {
    this._count = 0;
    this._head = null;
  }
}
