import { defaultEquals } from '../utils/default-equals.js';

import LinkedList from './linked-list.js';
import { Node } from '../models/linked-list.js';

export default class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  push(element) {
    const node = new Node(element);

    if (this._head === null) {
      this._head = node;
      this._head.next = this._head;
    } else {
      const current = this.getElementAt(this._count - 1);

      node.next = this._head;
      current.next = node;
    }

    this._count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this._count) {
      const node = new Node(element);

      if (index === 0) {
        if (this._head === null) {
          this._head = node;
          this._head.next = this._head;
        } else {
          const current = this.getElementAt(this._count);

          node.next = this._head;
          this._head = node;
          current.next = this._head;
        }
      } else {
        const previous = this.getElementAt(index - 1);

        node.next = previous.next;
        previous.next = node;
      }

      this._count++;

      return true;
    }

    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this._count) {
      let element = this._head.element;

      if (index === 0) {
        if (this._count === 1) {
          this._head = null;
        } else {
          const removed = this._head;
          const current = this.getElementAt(this._count);

          this._head = this._head.next;
          current.next = this._head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;

        element = current.element;
        previous.next = current.next;
      }

      this._count--;
      return element;
    }

    return undefined;
  }

  toString() {
    if (this._head === null) return '';

    let string = `${this._head.element}`;
    let current = this._head.next;

    for (let i = 0; i < this._count - 1 && current !== null; i++) {
      string = `${string}, ${current.element}`;
      current = current.next;
    }

    return string;
  }
}

