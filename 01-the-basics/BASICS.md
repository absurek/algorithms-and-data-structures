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