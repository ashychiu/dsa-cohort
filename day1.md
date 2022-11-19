## Problem 1: In 3-4 sentences, please explain what Big O Notation is.

Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows. Big O notation characterizes functions according to their growth rates: different functions with the same growth rate may be represented using the same O notation. The letter O is used because the growth rate of a function is also referred to as the order of the function. A description of a function in terms of big O notation usually only provides an upper bound on the growth rate of the function.

## Problem 2: For each of the time complexities shown below:

- Name the complexity
- Describe in 1-2 sentences of the complexity
- Provide a code example of how the complexity works

(Anti-clockwise)

- O(1) Constant time - An algorithm that is bound by a value that does not depend on the size of the input.  
  Example: Array.push(1)
- O(logn) Logarithmic time - A highly efficient algorithm that the ratio of the number of operations to the size of the input decreases and tends to zero when n increases.  
  Example: Binary search
- O(n) Linear time - An algorithm that the running time increases at most linearly with the size of the input.  
  Example: Array.find(element => element > 10)
- O(n^2) Quadratic time - An algorithm that the running time increases "squarely" with the size of the input.  
  Example: Nested for loops

```
for (let i=0, i< array.length, i++) {
  for (let i=0, i< array.length, i++) {
  console.log(array[i])
  }
}
```

- O(n!) Factorial time - An algorithm is said to be factorial time if T(n) is upper bounded by the factorial function n!.

- Example:

```
const factorial = n => {
    let num = n;

    if (n === 0) return 1
    for (let i = 0; i < n; i++) {
        num = n * factorial(n - 1);
    };

    return num;
};
```

- Rank from 1-5 (1 being the best, 5 being the worst)

1. constant O(1)
2. log O(logn)
3. linear O(n)
4. quadratic O(n^2)
5. factorial O(n!)

## Problem 3: Name 3 reasons why we care about Big O and we care about code performance.

**Answer:**

1. Scalability - Big O indicates the complexity of an algorithm in terms of the size of its inputs. This is essential to know how algorithms will scale.
2. Cost Saving - A fast algorithm requires less computing power and will save cost.
3. Code performance allows us to improve the code so that the output of the algorithm could run faster and takes less space

## Problem 4: What is the problem of using a time method such as performance.now() to measure how “fast” a code runs on our machines.

**Answer:**
Every computer has different computing time, so it's not accurate to measure performance.

## Problem 5: Given the following piece of code:

- Explain what the TOTAL time complexity is  
  o For example, if a function had one linear and a nested for...loop, it would be: n + n^2

- Explain what the CONSOLIDATED time complexity is
  o For example, if a function had one linear and a nested for...loop, it would condense to: n^2

```
const someFunction = (arr1) => {
arr1.push(1).pop() **// Time complexity: O(1) + O(1)**

for (let i = 0; i < arr1.length; i++) {
console.log('do something 2') **// Time complexity: O(n)**
}

for (let i = 0; i < arr1.length; i++) {
console.log('do something 3') **// Time complexity: O(n)**
}

for (let i = 0; i < arr1.length; i++) {
for (let i = 0; i < arr1.length; i++) {
console.log('do something 3') **// Time complexity: O(n^2)**
}
}
}
```

**Answer:**
TOTAL time complexity is the total amount of time required to run the all the operations in the algorithm. If a fucntion has one linear and a nested for...loop, it would be: n + n^2

CONSOLIDATED time complexity is only considering the “heavy” or worse time complexity since it is going to have a bigger impact on the performance of that code. If a fucntion has one linear and a nested for...loop, the solidated time would be: n^2

Total time complexity is written in the snippet: 2 O(1) + 2 O(n) + O(n^2)
Consolidated time complexity for the snippet above: O(n^2)

## Problem 6: Given the following piece of code:

- Explain what the TOTAL time complexity is  
  o For example, if a function had one linear and a nested for...loop, it would be: n + n^2
- Explain what the CONSOLIDATED time complexity is
  o For example, if a function had one linear and a nested for...loop, it would condense to: n^2

```
const someFunction1 = (arr1) => {
  let sum = arr1[1] + arr[2]  **// O(1)**

  while (condition) {  **// O(n)**
      sum = arr[5] + arr[7]  **//O(1)**
   }
  for (let i = 0; i < arr1.length; i++) {     **// O(n)**
    for (let i = 0; i < arr1.length; i++) {     **// O(n)**
      for (let i = 0; i < arr1.length; i++) {     **// O(n)**
        console.log('do something 3')
      }
    }
  }
}
```

**Answer:**

Total time complexity is written in the snippet: 2 O(1) + O(n) + O(n^3)
Consolidated time complexity: O(n^3)

## Problem 7: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities.

When the argument is large enough or tends towards a particular value or infinity, the impact of constants will be insignifiant.

## Problem 8: In 2-3 sentences, please explain what space complexity is and why we care.

Space complexity is how much additional memory needed to allocate to compute the algorithm. Taking up less memory will save cost.

## Problem 9: Given the following data TYPES, label what the space complexity is for each one:

**Answer:**

- Boolean: Constant
- Undefined: Constant
- Null: Constant
- Numbers: Constant
- String: Linear
- Array: Linear
- Object: Linear

## Problem 10: Give two reasons when you should use a array and when you should use a object.

**Answer:**
Use an array when you need fast access to indexed elements.  
Use a object when you don't need ordering or fast access to elements.

## Problem 11: Given the following object methods, label what the TIME complexity is for each one:

const obj = {
name: 'tony'
}
//inserting
obj.age = 44;
**Answer: O(1)**

//removing  
delete obj.age;
**Answer: O(1)**

//searching 1
obj.hasOwnProperty['name']
**Answer: O(n)**

//searching 2
for (const prop in obj) {
console.log(obj[prop])
}
**Answer: O(n)**

//accessing
obj.age //44
**Answer: O(1)**

//retrieving keys
Object.keys(obj)
**Answer: O(1)**

//retrieving values
Object.values(obj)
**Answer: O(1)**

## Problem 12: Given the following array methods, label what the TIME complexity is for each one:

const arr2 = [1, 2, 3, 4, 5, 6, 7];

//inserting 1  
arr2.push(8)  
**Answer: O(1)**

//inserting 2  
arr2.unshift(0)  
**Answer: O(n)**

//removing 1  
arr2.pop()  
**Answer: O(1)**

//removing 2  
arr2.shift()  
**Answer: 0(n)**

//searching 1  
const findNumber = arr2.find(num => num === 2)  
**Answer: O(n)**

//searching 2

```
for (let i = 0; i < arr2.length; i++) {
if (arr2[i] === 2) {
return arr2[i]
}
}
```

**Answer: O(n)**

//retrieving  
const getNumber = arr2[3]  
**Answer: O(1)**

//method 1  
const double = arr2.map(num => num \* 2)  
**Answer: O(n)**

//method 2  
const removeAndAddNewNumber = arr2.splice(1, 1, 5)  
**Answer: O(n)**

//method 3  
const getSum = arr2.reduce((total, num) => total + num, 0)  
**Answer: O(n)**

//method 4

```
for (const num of nums) {
console.log(num \* 2)
}
```

**Answer: O(n)**

//method 5  
const convertToString = arr2.join(' ')  
**Answer: O(n)**

//method 6  
const reversed = arr2.reverse();  
?? **Answer: O(n)**

## Problem 13: For each one of these code blocks, please identify the time & space complexity and explanation of why it is.

\*_Problem 1:_

```
function findFirstIndexOfNumber(number, array) {
for (let i = 0; i < array.length; i++) {    // O(n)
if (array[i] === number) {
return i;
}
}
return -1
}
```

**Answer:**
Time complexity: O(n)
Space complexity: Constant (no extra space needed)

\*_Problem 2:_

```
function findEachIndexOfNumber(number,array) {
let arrayOfIndexes = [];   // Linear space
array.forEach(function(element, index) {  // O(n)
if (element === number) { // O(1)
arrayOfIndexes.push(index); // O(1)
}
});
return arrayOfIndexes;
}
```

**Answer:**
Time complexity: O(1) + O(1) + O(n) = O(n)
Space complexity: Linear (a new array is return)

\*_Problem 3:_

```
const array = [36, 14, 1, 7, 21];

function higherOrLower(array) {
if (array[array.length -1 ] > array[0]) {  // n(1)
return "Higher";
else if (array[array.length -1 ] < array[0]) {  // n(1)
return "Lower";
} else {
return "Neither";   // n(1)
}
}
```

**Answer:**
Time complexity: O(1)
Space complexity: Linear (a string is returned)

\*_Problem 4:_

```
const array = [1,2,3,4,5,6,7,8];

function determineSumOfSequentialArray(array) {
let sum = 0;  // constant space, Time O(1)
for (let i = 0; i < array.length; i++) {   // O(n)
sum += array[i];   // O(1)
}
return sum;
}
```

**Answer:**
Time complexity: O(n)
Space complexity: Constant (a number is returned)

\*_Problem 5:_

```
const array = [1,2,3,4,5,6,7,8];

function determineSumOfSequentialArray(array) {
return array.length \* (array.length + 1)/2;
}
```

**Answer:**
Time complexity: O(1)
Space complexity: Constant (a number is returned)

\*_Problem 6:_

```
function searchSortedArray(number, array, beginIndex = 0, endIndex = array.length - 1) {
let middleIndex = Math.floor((beginIndex + endIndex)/2);  // Constant space, O(1)
if (array[middleIndex] === number) {  // O(1)
return middleIndex;
} else if (beginIndex >= endIndex) {  // O(1)
return -1;
} else if (array[middleIndex] < number) {  //O(1)
beginIndex = middleIndex + 1; // O(1)
return recursiveBinarySearch(number, array, beginIndex, endIndex); // O(log n)
} else if (array[middleIndex] > number) { // O(1)
endIndex = middleIndex - 1; // O(1)
return recursiveBinarySearch(number, array, beginIndex, endIndex);  //O(log n)
}
}
```

**Answer:**
Time complexity: O(log n)
Space complexity: Constant (a number is returned)

\*_Problem 7:_

```
const array1 = [3, 7, 9, 12, 15, 18, 32];
const array2 = [3, 3, 7, 41, 76];
function compareArrays(array1, array2) {
let arrayOfPairs = [];  // Linear space
array1.forEach(function(e, i) {   // O(n)
array2.forEach(function(e2, i2) {  // O(n)
if (e === e2) {  // O(1)
arrayOfPairs.push([i, i2]);   // O(1)
}
});
});
return arrayOfPairs;
}
```

**Answer:**
Time complexity: O(n^2)
Space complexity: Linear (a new array is returned)

\*_Problem 8:_

```
function sortByValue(array){
function swap(array, index1, index2){
let temporaryValue = array[index1];  // Constant space
array[index1] = array[index2]; // O(1)
array[index2] = temporaryValue; // O(1)
}
let count = 1;    // Constant space
while (count < array.length) {    // O(n)
let swapCount = 0;    // Constant space
for (let i=0; i<array.length-count; i++) {      //O(n)
if (array[i] > array[i+1]) { // O(1)
swap(array, i, i+1);
swapCount++;  // O(1)
}
}
count++; // O(1)
}
return array;
}
```

**Answer:**
Time complexity: O(n^2)
Space complexity: Constant (a number / original array is returned, no extra space needed)

\*_Problem 9:_

```
function returnDupes(array, array2) {
let dupeArray = [];  // Linear space
array.forEach(function(element) {     //O(n)
if (array2.includes(element)) {   //O(n)
dupeArray.push(element);    // O(1)
}
});
return dupeArray;
}
```

**Answer:**
Time complexity: O(n^2)
Space complexity: Linear (a new array is returned)

\*_Problem 10:_

```
function sumFilteredData(array) {
return array.filter(function(element) {     // O(n), Linear space
return ((element > 5) && (element < 20))      // O(n), Constant space
}).reduce(function(valueToAdd, currentValue) {  //O(n)
return valueToAdd + currentValue;  // O(1), Constant space
}, 0);
}
```

**Answer:**
Time complexity: O(n^2)
Space complexity: Linear (.filter() returns a new array)
