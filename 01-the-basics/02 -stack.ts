console.log('01-the-basics', '02-stack');

/**
 * Simple Stack implementation using the JS Array Object as the underlying structure
 */
class Stack<T> {
  #items: T[];

  constructor() {
    this.#items = new Array<T>();
  }

  push(element: T) {
    this.#items.push(element);
  }

  pop() {
    return this.#items.pop();
  }

  peek() {
    return this.#items[this.#items.length - 1];
  }

  size() {
    return this.#items.length;
  }
}

// Usage:

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // will print 3
console.log(stack.size()); // will print 3

console.log(stack.pop()); // will print 3
console.log(stack.pop()); // will print 2
console.log(stack.pop()); // will print 1
console.log(stack.pop()); // will print `undefined`

console.log(stack.size()); // will print 0
