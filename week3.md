## Problem #1: Frequency Counter Pattern

Given an array nums of size n, return the majority element.  
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.  
Please solve using a linear time complexity and using the frequency counter pattern  
Example 1:  
Input: nums = [3,2,3] Output: 3  
Example 2:  
Input: nums = [2,2,1,1,1,2,2]  
Output: 2

Constraints:  
n == nums.length  
1 <= n <= 5 \* 104  
 -109 <= nums[i] <= 109

**Pseudo code**  
// set up a frequency object  
// loop through the array to set key as array[i] and value and the frequency  
// set up majority = n/2  
// loop through the frequency map  
// if the freqency value is bigger than max, set max to be current freqency value  
// return the key with value max in the frequency map

**Answer**

```
  const solution = (nums) => {
  const freqCounter = new Map()

    for (const key of nums) {
      freqCounter.set(key, freqCounter.get(key) + 1 || 1)
    }

  let majority = Math.floor(nums.length/2)
    for (const [key, value] of freqCounter) {
      if (freqCounter.get(key) > majority) {
        return key
      }
    }
  }

```

## Problem #2: Divide and Conquer Pattern

sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums.  
If target exists, then return its index, otherwise return -1.  
Please write in time complexity of O(log n)

Example 1:  
Input: nums = [-1,0,3,5,9,12], target = 9 // Output: 4  
Explanation: 9 exists in nums and its index is 4  
Example 2:  
Input: nums = [-1,0,3,5,9,12], target = 2  
Output: -1  
Explanation: 2 does not exist in nums so return -1

Note:

1. You may assume that all elements in nums are unique.
2. n will be in the range [1, 10000].
3. The value of each element in nums will be in the range [-9999, 9999].

**Pseudo code**  
// set up 2 pointers, one at the start of the array and the other at the end  
// set up a middleIndex pointer  
// if the value of middleIndex is the same as target, return middleIndex  
// if the value of middleIndex is bigger than target  
// the end pointer moves to middleIndex -1  
// if the value of middleIndex is smaller than target  
// the start pointer moves to middleIndex +1  
// the loop continues as long as start index is smaller than or equal to end index  
// return -1 if the loop ends without a match

**Answer**

```
const binaryIterativeSearch = (nums, target) => {
    let start = 0
    let end = nums.length -1

    while (start <= end ) {
        let middle = Math.floor ((start + end )/ 2)

        if (nums[middle] === target) return middle
        else if (nums[middle] > target) end = middle - 1
        else start = middle + 1
    }
  return -1
}

```

## Bonus Problem #1: Binary Search

Given an integer array nums, return the number of triplets chosen from the array that  
can make triangles if we take them as side lengths of a triangle.

Example 1:

Input: nums = [2,2,3,4]  
Output: 3  
Explanation: Valid combinations are:  
2,3,4 (using the first 2)  
2,3,4 (using the second 2)  
2,2,3

Example 2:

Input: nums = [4,2,3,4]  
Output: 4

Constraints:

1 <= nums.length <= 1000  
0 <= nums[i] <= 1000

/\*\*

- @param {number[]} nums
- @return {number}
  \*/

// Pseudo code  
// sort the array from small to large  
// set up 3 pointers a b c, one at the start (a), one at the end (c), one at second last to the end (b)  
// set up a counter  
// loop start from the end since that is the longest length  
// if arr[a] + arr[b] is bigger than arr[c], then all the indices between a and b will be valid triangle as well  
// therefore counter increment by b - a  
// now the pointer b moves to the left by one place and check if there are triangles  
// if not, that means arr[a] isn't big enough, so pointer a move to the right by one place and check if there are triangles  
// as long as a is less than b, the loop continues

**Answer**

```
const triangleNumber = (nums) => {
  let counter = 0;
  const arr = nums.sort();

  for (let c = arr.length -1; c >= 1; c--) {
    let a = 0, b = c-1;
    while (a < b) {
    if (nums[a] + nums[b] > nums[c]) {
      counter += b-a
      b--
    }
    else a++
  }
  }
  return counter
};

// time complexity: O(n^2)
// space complexity: Constant
```

## Bonus Problem #2: Frequency Counter Pattern

Given an integer array nums of length n where all the integers of nums are in the  
range [1, n] and each integer appears once or twice, return an array of all the  
integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]  
Output: [2,3]

Example 2:

Input: nums = [1,1,2]  
Output: [1]

Example 3:

Input: nums = [1]  
Output: []

Constraints:

n == nums.length  
1 <= n <= 105  
1 <= nums[i] <= n  
Each element in nums appears once or twice.

/\*\*

- @param {number[]} nums
- @return {number[]}
  \*/

// Pseudo code  
// iterate through the array, and record the frequency  
// iterate through the array again, compare the value of the key on frequency counter  
// if the frequecy is less than 2, set num[i] to 0 (given 1 <= nums[i] <= n, there will be no zeros in the array)  
// filter out the zeros, those left are an array of numbers which occur twice  
// use new Set to get unique numbers

**Answer**

```
const findDuplicates = (nums) => {
  const freqCounter = new Map()
  for (let i=0; i<nums.length; i++) {
    freqCounter.set(nums[i], freqCounter.get(nums[i]) + 1 || 1)
  }
  for (let i=0; i<nums.length; i++) {
    if (freqCounter.get(nums[i]) < 2) {
      nums[i] = 0     // given 1 <= nums[i] <= n
    }
  }

  // in attempt of constant space
  nums = nums.filter(num => num > 0)
  nums = [...new Set(nums)]
  return nums
};
```
