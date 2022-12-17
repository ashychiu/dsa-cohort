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
              title: "Spongebob",
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

function merge(arr1, arr2) {
  // Create a new empty array to store the merged result
  let merged = [];

  // Set variables to track the current index in each array
  let i = 0;
  let j = 0;

  // Loop while there are still elements in either array
  while (i < arr1.length || j < arr2.length) {
    // If both arrays have elements, compare the elements and add the smaller one to the merged array
    if (i < arr1.length && j < arr2.length) {
      if (
        arr1[i].profile.favorites[0].rating <
          arr2[j].profile.favorites[0].rating ||
        (arr1[i].profile.favorites[0].rating ===
          arr2[j].profile.favorites[0].rating &&
          arr1[i].profile.rank < arr2[j].profile.rank)
      ) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }

      // If only the first array has elements, add its element to the merged array
    } else if (i < arr1.length) {
      merged.push(arr1[i]);
      i++;

      // If only the second array has elements, add its element to the merged array
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Return the merged array
  return merged;
}

function mergeSort(arr) {
  // If the array has only one element, return it
  if (arr.length === 1) {
    return arr;
  }

  // Split the array into two halves
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively sort the left and right halves
  left = mergeSort(left);
  right = mergeSort(right);

  // Merge the sorted left and right halves and return the result
  return merge(left, right);
}

// Use the mergeSort function to sort the array of objects by rating and then by rank
let sortedData = mergeSort(data.results.payload);
