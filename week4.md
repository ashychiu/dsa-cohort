## Problem 1: Recursion

// Write a recursive function called flatTheArray which accepts an array of arrays  
// and returns a new array with all values flattened.

// flatTheArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]  
// flatTheArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]  
// flatTheArray([[1],[2],[3]]) // [1,2,3]  
// flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

//Pseudo code  
//Iterate through the array  
//if array[i].length is truthy -> resursive path  
//if not -> base path, push array[i] into empty array

**Answer:**

```
const flatTheArray = (arr, flatArray = []) => {
    for (let i=0; i<arr.length; i++) {
    if (arr[i].length) {
      flatTheArray(arr[i], flatArray)  //recursive path
    }
    else {
      flatArray.push(arr[i])   // base path
    }
  }
return flatArray
}
```

## Problem 2: Recursion

// Write a recursive function called capitalizeWords.  
// Given an array of words, return a new array containing each word capitalized.

// let words = ['tony', 'kim'];  
// capitalizedAllLetters(words); // ['TONY', 'KIM']

//Pseudo code  
//Set up an empty array as arguement  
//Iterate through the array  
//Convert array[i] to upper case
//push into empty array

**Answer:**

```
const capitalizeAllLetters = (array, capitalized = []) => {
  for (let i=0; i<array.length; i++) {
    if (array[i].length) {
      capitalized.push(array[i].toUpperCase())
    }
  }
  return capitalized
}
```

## Problem 3: Recursion

// example 7: factorial

// factorial(1) // 1  
// factorial(2) // 2  
// factorial(7) // 5040

// Write a function factorial which accepts a number and returns the factorial of that number.  
// A factorial is the product of an integer and all the integers below it;  
// e.g., factorial four ( 4! ) is equal to 24, because 4 _ 3 _ 2 \* 1 equals 24. factorial zero
(0!) is always 1.

**Answer:**

```
function factorial(x, product=1) {
  if (x === 1) {
    return product
  }
  return factorial(x-1, product * x)
}

```

## Problem 4: Recursion

// example 12: collect Strings

// Write a function called collectStrings which accepts an object and returns  
// an array of all the values in the object that have a typeof string

collectStrings(obj) // ["foo", "bar", "baz"])

//recursion with helper

**Answer:**

```
function collectStrings(obj, stringArray =[]) {
  for (const property in obj) {
    if (typeof (obj[property]) === 'string') {
      stringArray.push(obj[property])
    }
  }
  return stringArray
}

```

## Problem #5: Bubble Sort

// Given the following data structure

```
const data = [
  {
      name: 'John Smith',
      age: new Map([['age', 88]]),
      favoriteMovie: [
          {
              title: 'Hulk',
              genre: 'action',
              rating: 6
          }
      ]
  },
  {
      name: 'Tony Kim',
      age: new Map([['age', 3]]),
      favoriteMovie: [
          {
              title: 'Top Gun',
              genre: 'action',
              rating: 10
          }
      ]
  },
  {
      name: 'John Smith',
      age: new Map([['age', 35]]),
      favoriteMovie: [
          {
              title: 'Saw',
              genre: 'horror',
              rating: 8
          }
      ]
  }
]
```

// Using the bubble sort, please sort each profile  
// by ascending order for the following properties:

**(5a) Sort by age**

//Pseudo code  
//iterate through the array  
//get the age in the Map  
//compare the value with that of the next object  
//if bigger, swap  
//if not, no swap

**Answer:**

```
const sortedByAge = (data) => {
  for (let i = data.length -1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
  if (data[j].age.get("age") > data[j+1].age.get("age")) {
  let temp = data[j]
  data[j] = data[j+1]
  data[j+1] = temp
}
}
  }
  return data
}
```

**(5a) Sort by favorite movie rating**

**Answer:**

```
const sortedByRating = (data) => {
  for (let i = data.length -1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
  if (data[j].favoriteMovie[0].rating > data[j+1].favoriteMovie[0].rating) {
  let temp = data[j]
  data[j] = data[j+1]
  data[j+1] = temp
}
// console.log(data[j].favoriteMovie[0].rating)
}
  }
  return data
}

```

## Bonus Challenge

// problem 15: capitalizeFirstLetter

// Write a recursive function called capitalizeTheFirst.  
// Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirstLetter(['tony', 'truck']); // ['Tony', 'Truck']

```
 const capitalizeFirstLetter = (array, capitalized = []) => {
  for (let i=0; i<array.length; i++) {
    if (array[i].length) {
      capitalized.push(array[i].slice(0,1).toUpperCase()+array[i].slice(1))
    }
  }
  return capitalized
}
```

// problem #2: capitilize all letters

// Write a recursive function called capitalizeWords.  
// Given an array of words, return a new array containing each word capitalized.

// let words = ['tony', 'kim'];
// capitalizedAllLetters(words); // ['TONY', 'KIM']

const capitalizeAllLetters = (array) => {
}
