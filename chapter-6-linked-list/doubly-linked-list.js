import { defaultEquals } from '../utils/default-equals.js';

import LinkedList from './linked-list.js'
import { DoublyNode } from '../models/doubly-linked-list.js';

export default class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this._tail = null;
  }

  get tail() {
    return this._tail.element;
  }

  push(element) {
    const node = new DoublyNode(element);

    if (this._head === null) {
      this._head = node;
      this._tail = this._head;
    } else {
      node.prev = this._tail;
      this._tail.next = node;
      this._tail = node;
    }

    this._count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this._count) {
      const node = new DoublyNode(element);

      if (index === 0) {
        if (this._head === null) {
          this._head = node;
          this._tail = node;
        } else {
          node.next = this._head;
          this._head.prev = node;
          this._head = node;
        }
      } else if (index === this._count) {
        node.prev = this._tail;
        this._tail.next = node;
        this._tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;

        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }

      this._count++;

      return true;
    }

    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this._count) {
      let element;

      if (index === 0) {
        element = this._head.element;
        this._head = this._head.next;

        if (this._count === 1) {
          this._tail = null;
        } else {
          this._head.prev = null;
        }
      } else if (index === this._count - 1) {
        element = this._tail.element;

        this._tail = this._tail.prev;
        this._tail.next = null;
      } else {
        const current = this.getElementAt(index);
        const previous = current.prev;

        previous.next = current.next;
        current.next.prev = previous;

        element = current.element;
      }

      this._count--;

      return element;
    }

    return undefined;
  }

  clear() {
    this._count = 0;
    this._head = null;
    this._tail = null;
  }
}
