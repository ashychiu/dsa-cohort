## Problem #1: Multiple Pointers Pattern

/\*
Write a function called subsequence which takes in two strings and checks whether  
the characters in the first string form a subsequence of the characters in the second string.  
In other words, the function should check whether the characters in the first string  
appear somewhere in the second string, without their order changing.

Write your solution with time complexity O(n) and space O(1)
\*/

// Pseduo code  
// setup 2 pointers, one at the start of str1, the other at the start of str2  
// if the values of the 2 pointers match, both pointers move forward by one character  
// if not, pointer1 stays but pointer2 moves forward until it matches with pointer1  
// as long as pointer2 is not at the end of str2, the loop continues  
// when the loop ends, if pointer1 does not move to the end, that means there is no match --> return false

**Answer**

```
const subsequence = (str1, str2) => {
let pointer1 = 0
let pointer2 = 0
while (pointer1 < str1.length && pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++
      pointer2++
    } else pointer2++
  }
return pointer1 === str1.length
}
```

// Test Cases:

// subsequence('hello', 'hello world') true  
// subsequence('sing', 'sting') true  
// subsequence('abc', 'abracadabra') true  
// subsequence('abc', 'acb') false

## Problem #2: Sliding Window Pattern

/\*  
Write a function called longestSubstringInString, which accepts a string and  
returns the length of the longest substring with all distinct characters from the START of the
string.

Please write in time complexity of O(n)
\*/

// Pseduo code  
// setup a hashmap
// loop through the string, check if hashmap has the character, if yes stop. if not add to hashmap  
// return the size of the hashmap

**Answer**

```
const longestSubstringFromStart = (str) => {
const hashmap = new Map();
    for (let i=0; i < str.length; i++) {
        if (hashmap.has(str[i])) break
        else {
        hashmap.set(str[i], i)
        }
    }
  return hashmap.size
}
```

// Test Cases:

// longestSubstringInString('') 0  
// longestSubstringInString('rithmschool') 7 because of ‘rithmsc’  
// longestSubstringInString('thisisawesome') 4 because of ‘this’  
// longestSubstringInString('thecatinthehat') 5 because of ‘theca’  
// longestSubstringInString('bbbbbb') 1 because of ‘b’  
// longestSubstringInString('longestsubstring') 7 because of ‘longest’

## Bonus Challenge

For problem #2, find the longest substring from the entire string itself and NOT from the start

// psuedo code  
// set up a hashmap and maxLength  
// loop through the string  
// check if the character already in hashmap, if yes, that mean the character isn't unique anymore, thus the curent substring ends  
// compare the length of the current substring to maxlegth  
// if bigger, set to be new max  
// Now the new substring starts from the repeated character + 1  
// repeat till the end of the string
// return max length

**Answer**

```
const longestSubstringInString = (str) => {
    let head = 0; maxLength = 0
    const hashmap = new Map();

    for (let i=0; i < str.length; i++) {
        if (hashmap.get(str[i]) >= head) {
          head = hashmap.get(str[i]) + 1
        }
        hashmap.set(str[i], i)
        let currentLength = i - head + 1
        maxLength = Math.max (currentLength, maxLength)
    }
  return maxLength
}
```
