const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

const callback = (error, desc) => {
  if (error) {
    console.log(error);
  } else {
    console.log(desc);
  }
};

fetchBreedDescription(breedName, callback);