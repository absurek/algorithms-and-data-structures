console.log('01-the-basics', 'Array example');

// initialize the array
const array: number[] = [1, 2, 3];
console.log(array[0]); // will print 1 to the console

// replace the value with 4 on index 0
array[0] = 4;
console.log(array[0]); // now it's going to print 4 to the console

// initialize a 2-dimensional array
const twoDimensionalArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(twoDimensionalArray[0][0]); // will print 1 to the console
console.log(twoDimensionalArray[2][2]); // will print 9 to the console

// NOTE: The Array object in JavaScript is not actually an implementation of the Array Data Structure
// That's why we can do thins like: `array.push(4);`
