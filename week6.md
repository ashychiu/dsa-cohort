### Problem: Singly Linked List

// Challenge Problem  
// Given a linked list, return the node that occurs the most in the list.  
// For example, given the following linked list:  
// 1 -> 1 -> 2 -> 2 -> 2 -> 3 -> null  
// This function should return the node of 2.  
// The function should take in a argument of a linked list and  
// return a value of the node that occurs the most often.  
// PLEASE WRITE THIS FUNCTION IN THE SINGLY LINKED CLASS!!!

**Pseudo code**  
//loop through the singly linked list, starting from this.head  
//record the value of each node using a map  
//set highest frequency to 0  
//loop through the map and compare with the high frequency, set new highest  
//return the key of the highest frequecy in the map

```
class SinglyLinkedList {
  mostFrequent(list) {
    const freqCounter = new Map();

    let current = this.head;
    while (current) {
      freqCounter.set(current.value, freqCounter.get(current.value) + 1 || 1);
      current = current.next;
    }

    let mostFreqNode = null;
    let highestFreq = 0;

    for (const [nodeValue, frequency] of freqCounter) {
      if (frequency > highestFreq) {
        mostFreqNode = nodeValue;
        highestFreq = frequency;
      }
    }
    return mostFreqNode;
  }
}
```
