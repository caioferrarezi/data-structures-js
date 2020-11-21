const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// adding elements
numbers[numbers.length] = 10;
numbers.push(11);
numbers.push(12, 13);

// adding at the first position
Array.prototype.insertFirstPosition = function(value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }

  this[0] = value;
}

numbers.insertFirstPosition(-1);
numbers.unshift(-2);
numbers.unshift(-4, -3);

// removing elements
numbers.pop();

// removing at the first position
Array.prototype.reIndex = function(myArray) {
  const newArray = [];

  for(let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }

  return newArray;
}

Array.prototype.removeFirstPosition = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = numbers[i + 1];
  }

  return this.reIndex(this);
}

//numbers = this.removeFirstPosition()
numbers.shift();

// adding and removing from specific position
numbers.splice(5, 3);
numbers.splice(5, 0, 2, 3, 4)
numbers.splice(5, 3, 2, 3, 4)
