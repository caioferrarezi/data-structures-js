import DoublyLinkedList from './doubly-linked-list';

export default class StackLinkedList {
  constructor() {
    this._items = new DoublyLinkedList();
  }

  get isEmpty() {
    return this._items.isEmpty;
  }

  get size() {
    return this._items.size;
  }

  get peek() {
    if (this.isEmpty) {
      return undefined;
    }

    return this._items.tail;
  }

  push(element) {
    this._items.push(element);
  }

  pop() {
    if (this.isEmpty) {
      return undefined;
    }

    return this._items.removeAt(this.size - 1);
  }
}
