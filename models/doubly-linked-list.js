import { Node } from './linked-list.js';

export class DoublyNode extends Node {
  constructor(element) {
    super(element);
    this.prev = null;
  }
}
