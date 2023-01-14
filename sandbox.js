// const data = {
//   results: {
//     payload: [
//       {
//         profile: {
//           name: "Tony",
//           rank: 9,
//           favorites: [
//             {
//               title: "Spider-Man",
//               rating: 5,
//             },
//             {
//               title: "Spongebob",
//               rating: 9,
//             },
//             {
//               title: "Spider-Man",
//               rating: 1,
//             },
//             {
//               title: "Spider-Man",
//               rating: 7,
//             },
//             {
//               title: "Spider-Man",
//               rating: 6,
//             },
//             {
//               title: "Spider-Man",
//               rating: 2,
//             },
//           ],
//         },
//       },
//       {
//         profile: {
//           name: "John",
//           rank: 2,
//           favorites: [
//             {
//               title: "Hulk",
//               rating: 10,
//             },
//             {
//               title: "Hulk",
//               rating: 1,
//             },
//             {
//               title: "Hulk",
//               rating: 4,
//             },
//             {
//               title: "Hulk",
//               rating: 3,
//             },
//             {
//               title: "Top Gun",
//               rating: 8,
//             },
//           ],
//         },
//       },
//     ],
//   },
// };

// const arr = data.results.payload;

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   const result = [];

//   while (left.length && right.length) {
//     if (
//       left[0].profile.favorites[0].rating <=
//       right[0].profile.favorites[0].rating
//     ) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }

//   return [...result, ...left, ...right];
// }

// Example usage:
// const sortedData = mergeSort(arr[0].profile.favorites);
// console.log(arr[0].profile.favorites.length);

// const mergeSearchByRank = (arr) => {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSearchByRank(arr.slice(0, mid));
//   let right = mergeSearchByRank(arr.slice(mid));
//   return merge(left, right);
// };

// const merge = (arr1, arr2) => {
//   let sorted = [];
//   let i = 0;
//   let j = 0;

//   const rank1 = arr1[i].profile.rank;
//   const rank2 = arr2[j].profile.rank;

//   while (i < arr1.length && j < arr2.length) {
//     if (rank2 > rank1) {
//       sorted.push(arr1[i]);
//       i++;
//     } else {
//       sorted.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     sorted.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     sorted.push(arr1[j]);
//     j++;
//   }

//   return sorted;
// };

// const mergeSortByRating = (arr) => {
//   for (let k = 0; k < arr[0].profile.favorites.length; k++) {
//     if (arr[k].profile.favorites.length <= 1) return arr;
//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSearchByRating(arr[k].profile.favorites.slice(0, mid));
//     let right = mergeSearchByRating(arr[k].profile.favorites.slice(mid));
//     return mergeSort(left, right);
//   }
// };

// const mergeSort = (arr1, arr2) => {
//   let sorted = [];
//   let i = 0;
//   let j = 0;

//   const rating1 = arr1[i].rating;
//   const rating2 = arr2[j].rating;

//   while (i < arr1.length && j < arr2.length) {
//     if (rating2 > rating1) {
//       sorted.push(arr1[i]);
//       i++;
//     } else {
//       sorted.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     sorted.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     sorted.push(arr1[j]);
//     j++;
//   }

//   return sorted;
// };

// // // console.log(arr[0].profile.favorites);
// console.log("answer", mergeSortByRating(arr));

// // console.log(mergeSearchByRank(arr));

// const mergeSearchByRankAndRatings = (arr) => {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSearchByRank(arr.slice(0, mid));
//   let right = mergeSearchByRank(arr.slice(mid));
//   return merge(left, right);
// };

// const merge2 = (arr1, arr2) => {
//   let sorted = [];
//   let i = 0;
//   let j = 0;

//   const rank1 = arr1[i].profile.rank;
//   const rank2 = arr2[j].profile.rank;

//   while (i < arr1.length && j < arr2.length) {
//     if (rank2 > rank1) {
//       sorted.push(arr1[i]);
//       i++;
//     } else {
//       sorted.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     sorted.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     sorted.push(arr1[j]);
//     j++;
//   }

//   return sorted;
// };

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// const maxStorage = (arr) => {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let current = Math.min(arr[i], arr[j]) * Math.abs(j - i);
//       max = Math.max(max, current);
//     }
//   }
//   return max;
// };

// // console.log(maxStorage(height));

// // two pointers

// const maxStorage2 = (arr) => {
//   let max = 0;
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let volume = Math.min(arr[left], arr[right]) * (right - left);
//     // console.log(left, right, volume);
//     max = Math.max(max, volume);
//     if (arr[left] < arr[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return max;
// };

// // console.log(maxStorage2(height));

// const mergeSort = (data, key) => {
//   if (data.length < 2) return data;
//   const middle = Math.floor(data.length / 2);
//   const left = data.slice(0, middle);
//   const right = data.slice(middle);
//   return mergeByKey(mergeSort(left, key), mergeSort(right, key), key);
// };

// const mergeByKey = (left, right, key) => {
//   const result = [];
//   while (left.length && right.length) {
//     if (left[0][key] < right[0][key]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }
//   return [...result, ...left, ...right];
// };

// Example usage
// console.log(mergeSort(data.results.payload, "rating"));

// const array = [111, 222, 333, 444];

// console.log(array.shift());

// class SinglyLinkedList {
//   mostFrequent(list) {
//     const freqCounter = new Map();

//     let current = this.head;
//     while (current) {
//       freqCounter.set(current.value, freqCounter.get(current.value) + 1 || 1);
//       current = current.next;
//     }

//     let mostFreqNode = null;
//     let highestFreq = 0;

//     for (const [nodeValue, frequency] of freqCounter) {
//       if (frequency > highestFreq) {
//         mostFreqNode = nodeValue;
//         highestFreq = frequency;
//       }
//     }
//     return mostFreqNode;
//   }
// }

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let freqCounterS = new Map();
  for (let i = 0; i < s.length; i++) {
    freqCounterS.set(s[i], freqCounterS.get(s[i]) + 1 || 1);
  }
  console.log(freqCounterS);
  let freqCounterT = new Map();
  for (let i = 0; i < t.length; i++) {
    freqCounterT.set(t[i], freqCounterT.get(t[i]) + 1 || 1);
  }
  console.log(freqCounterT);
  for (const [key, frequency] of freqCounterS) {
    if (frequency !== freqCounterT.get(key)) return false;
  }
  return true;
};

console.log(isAnagram("angel", "galne"));
