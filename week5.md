## Problem #1: Merge Sort

Description: Congratulations! You were just hired to be a junior backend engineer at Hanawilo! As the first task at Hanawilo, your manager has asked you to implement a sorting algorithm using the Merge sort of the payloads coming back from the MongoDB database. The website currently is running a very slow sorting algorithm and it is driving away customers due to the slowness, therefore, as your first task, he has assigned you to rewrite the sorting algorithm for this payload returned from the MongoDB API fetch call.
He has asked to return the following data in two sorting options:

1. Merge sort (ascending order) by the rank
2. Merge sort (ascending order) by the ratings AND rank

Please see below for the data returned from the database.

```
const data = {
  results: {
    payload: [
      {
        profile: {
          name: "Tony",
          rank: 9,
          favorites: [
            {
              title: "Spider-Man",
              rating: 5,
            },
            {
              rating: 9,
            },
          ],
        },
      },
      {
        profile: {
          name: "John",
          rank: 2,
          favorites: [
            {
              title: "Hulk",
              rating: 1,
            },
            {
              title: "Top Gun",
              rating: 8,
            },
          ],
        },
      },
    ],
  },
};

const mergeSearchByRank = (arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor (arr.length /2);
    let left = mergeSearchByRank (arr.slice(0, mid))
    let right = mergeSearchByRank (arr.slice(mid))
    return (left, right)
}
```

## Problem #2: Singly Linked List:

Please construct the two classes with the appropriate properties for the Node and SLL, then for the SLL, please write the methods for:

- Push()
- Pop()

```
class Node{ constructor(val){ }
}
class SinglyLinkedList{ constructor(){
} }
```

## Problem #3: Please solve this pattern using time complexity of O(n) and using the CORRECT PATTERN!

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).  
Find two lines that together with the x-axis form a container, such that the container contains the most water.  
Return the maximum amount of water a container can store.  
Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]  
Output: 49  
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.  
Example 2:  
Input: height = [1,1]  
Output: 1

//Pseudo code  
//set up two pointers, one at the start, one at the end
//set up max = 0
//calulate the volume between left & right
//check if the volume is bigger than max, if yes, set max = volume
//if the value of left pointer is smaller, move left pointer to the right (so to find bigger volume)
//if not, move right pointer to the left (to find bigger vol)
//return max

```
const maxWater = (arr) => {
  let max = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let volume = Math.min(arr[left], arr[right]) * (right - left);
    console.log(left, right, volume);
    max = Math.max(max, volume);
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
```

}
