### Frequency Counter

Given two strings s and t, return true if t is an anagram of s, and false otherwise.  
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:  
Input: s = "anagram", t = "nagaram" //Output: true  
Example 2:  
Input: s = "rat", t = "car" //Output: false  
Constraints:  
1 <= s.length, t.length <= 5 \* 104  
s and t consist of lowercase English letters.

//Pseudo code  
//iterate through string s, string t  
//record the letter with a map  
//compare the value of each key of the map  
//if not the same, return false  
//otherwise, return true  
//edge case: the length of the two strings are different, return false

```
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let freqCounterS = new Map();
  for (let i = 0; i < s.length; i++) {
    freqCounterS.set(s[i], freqCounterS.get(s[i]) + 1 || 1);
  }
  let freqCounterT = new Map();
  for (let i = 0; i < t.length; i++) {
    freqCounterT.set(t[i], freqCounterT.get(t[i]) + 1 || 1);
  }
  for (const [key, frequency] of freqCounterS) {
    if (frequency !== freqCounterT.get(key)) return false;
  }
  return true;
};

console.log(isAnagram("angel", "galne"));
//Time complexity: O(n)
//Space complexity: constant
```
