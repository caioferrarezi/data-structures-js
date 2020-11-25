import Deque from './deque';

export default function(string) {
  if (!string) return false;

  const deque = new Deque();
  let equal = true;

  string = string.toLocaleLowerCase().replace(/\s/g, '');

  for (let i = 0; i < string.length; i++) {
    deque.addBack(string.charAt(i));
  }

  while(deque.size > 1 && equal) {
    equal = deque.removeFront() === deque.removeBack();
  }

  return equal;
}
