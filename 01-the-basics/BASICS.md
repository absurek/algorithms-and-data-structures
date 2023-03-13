# Based on: [Data Structures - Computer Science Course for Beginners - YouTube](https://youtu.be/zg9ih6SVACc)

## What are Data Structures?

> A Data Structure is a way to store, organize and manage information (or data)  
> in a way that allows you, the programmer to easily access or modify the values within them.  

## Efficiency

> The metrics used to judge the speed and efficiency of different aspects of data structures.

### Measuring efficiency with the **BigO Notation**

- We want a quantifiable way to measure how efficient certain data structures are at different tasks we might ask of it.
- The 4 most common functions you might want from a data structure:
  - Accessing elements
  - Searching for an element
  - Inserting an element
  - Deleting an element
- By measuring how efficiently a data structure can do these 4 things we can create a report card of sorts.
  That tell us what a certain data structure is good ad and what is it bad at,
  so we can figure out what data structure to use to solve our specific problem.
- We use **BigO Notation Time Complexity Equations** to grade the performance of these operations.

#### BigO Notation Time Complexity Equations

> A **Time Complexity Equation** works by inserting the *size* of the data-set as an integer *n*, and returning
> the number of *operations* that need to be conducted by the computer before the function can finish.

- We always use the worst-case scenario when juding these data structures.
- We measure efficiency in number of operations performed, because measuring by how long the function takes to
  run would be biased based by the hardware performing the operations.

**It's important to note that this is not the end all be all for deciding on which data structure to use in your program. Some have specific features which separate them.**

#### The 6 most common Time Complexity Equations (from most to least efficient)

- **O(1)** is the best a data structure can "score" on each criteria:
  - This means that the operations the task requires do not depend on the size of your data-set.
  - In other words matter how large your data-set is, the number of operations remains constant.
- **O(log n)** still provides fast completion time.
  - Gets more efficient as the size of the data-set increases.
- **O(n)** is the last of the "decent" equations:
  - The number of operations increase linearly as your data-set grows.
- **O(n log n)** the first which is relatevily bad in terms of efficiency.
- **O(n<sup>2</sup>)** an **O(2<sup>n</sup>)** are very bad in terms of efficiency.
  - They are exponential in structure: The larger your data-set is, the more inefficient they become.

## The Array

- Fundamentally a list of values with the same type grouped together.
- Usually has 3 attributes associated with it:
  - A Name: used to reference and interact with it.
  - A Type: what type of information is stored or will be stored within the array (for example `string` or `int`).
  - A Size: a set integer that is fixed upon creation of the array (cannot be changed).
    It represents the total amount of elements that are able to be stored within the array.
- There are 2 different ways to create an array in most languages:
  - Populate the array with elements right then and there.
  - Set a specific size for the array, then populate it later.
- To get information that is stored within the array, we use a numerical index:
  - An integer which corresponds to an element's position within the array.
- Referencing an array element's index is also how we replace elements within an array.
- An array with an array at each index is known as a 2-dimenional array.
- You can have higher dimensional arrays as well.

### An example:
[arrays in typescript](01-array.ts)

### Arrays analysed as a Data Structure Using BigO Notation

 - Accessing an element: **O(1)**
   - This is because:
     - An arrays elements are stored right next to each other in memory.
     - An arrays elements have the a specific type.
     - Therefore to access an element within the array, all we have to do is finding the start of the array <br />
       in memory and then adding the given index times the size of the type of the elements to it: <br />
       `arrayStart + (index * (sizeof (typeof element)))`

 - Searching for an element: **O(n)**
   - This is because we must use *linear search* as most of the time we are working with unsorted lists.

 - Inserting an element: **O(n)**
   - This is because inserting an element whithin the array requires to shift every element that's after
     the index you want to insert into.
    - For example given the array `[2, 3, 4, 5, null]` to insert 1 at index 0:
      - We have to shift every element currently in the array like this `[null, 2, 3, 4, 5]`.
      - Then insert 1 to the empty slot: `[1, 2, 3, 4, 5]`.

 - Deleting an element: **O(n)**
   - This is because to remove an element from an array at a given index, we have to
     essentialy play the steps for an insertions backwards.

## The ArrayList

- The ArrayList, fundamentally, can be thought of as a growing array (a resizable Array).
- Not all languages have it, but in Java and C# it exists as a class.
- Under the hood the ArrayList uses an Array as it's scafolding system.
- This makes the ArrayList have a lot of **similar functionality to an array**.
- `std::vector` in C++ is a similar structure.

### Time Complexity Equations of the ArrayList

- Accessing: **O(1)**
- Searching: **O(n)**
- Inserting: **O(n)**
- Deleting: **O(n)**
