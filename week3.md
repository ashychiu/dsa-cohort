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
// set up max frequency = n/2  
// loop through the frequency map  
// if the freqency value is bigger than max, set max to be current freqency value  
// return the key with value max in the frequency map

**Answer**

```
  const solution = (nums) => {
  const freqCounter = new Map()

    for ( let key of nums) {
      freqCounter.set(key, freqCounter.get(key) + 1 || 1)
    }

  let maxFrequency = Math.floor(nums.length/2)
  let mostFrequentElement
    for (const [key, value] of freqCounter) {
      if (freqCounter.get(key) >= maxFrequency) {
        maxFrequency = freqCounter.get(key)
        mostFrequentElement = key
      }
    }
    return mostFrequentElement
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
// the loop continues as long as start index is smaller than end index  
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
