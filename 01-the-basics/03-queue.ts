console.log('01-the-basics', '03-queue');

/**
 * Simple Queue implementation using the JS Array Object as the underlying structure
 */
class Queue<T> {
  #items: T[];

  constructor() {
    this.#items = new Array<T>();
  }

  enqueue(item: T) {
    this.#items.push(item);
  }

  dequeue() {
    return this.#items.shift();
  }

  peek() {
    return this.#items[0];
  }

  size() {
    return this.#items.length;
  }
}

// Usage:

const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // will print 1
console.log(queue.size()); // will print 3

console.log(queue.dequeue()); // will print 1
console.log(queue.dequeue()); // will print 2
console.log(queue.dequeue()); // will print 3
console.log(queue.dequeue()); // will print `undefined`

console.log(queue.size()); // will print 0
