import { data } from "./input.js";

const { results } = data;

const sortedByPostcode = (results) => {
  for (let i = results.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (results[j].location.postcode > results[j + 1].location.postcode) {
        let temp = results[j];
        results[j] = results[j + 1];
        results[j + 1] = temp;
      }
    }
  }
  return results;
};

// console.log(sortedByPostcode(results));

const returnData = {
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

console.log("return", returnData.results.payload[0].profile.rank);
