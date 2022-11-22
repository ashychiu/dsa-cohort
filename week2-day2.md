## Problem #1: Multiple Pointers Pattern

/\*
Write a function called subsequence which takes in two strings and checks whether  
the characters in the first string form a subsequence of the characters in the second string.  
In other words, the function should check whether the characters in the first string  
appear somewhere in the second string, without their order changing.

Write your solution with time complexity O(n) and space O(1)
\*/

const subsequence = (str1, str2) => {

}

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
// setup an empty string of substring
// loop through the string, check if hashmap has the character, if yes stop. if not add to substring
// return length of subString

**Solution**

```
const longestSubstringInString = (str) => {
const hashmap = new Map();
    for (let i=0; i < str.length; i++) {
        if (hashmap.has(str[i])) break
        else {
        hashmap.set(str[i], 1)
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

**bonus challenge**  
For problem #2, find the longest substring from the entire string itself and NOT from the start
