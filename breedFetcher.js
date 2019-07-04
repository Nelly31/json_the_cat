const request = require('request');

// https://api.thecatapi.com/v1/breeds/search
// https://api.thecatapi.com/v1/breeds/search?q=CATNAME

// const args = process.argv.slice(2);

// original code
// const breedFetcher = () => {
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
//     const data = JSON.parse(body);
//     if (!data.length) {
//       console.log('Sorry! That cat breed isn\'t found');
//     } else if (data.message === "Not Found") {
//       console.log(`Error ${data.status}`);
//     } else {
//       console.log(data[0].description);
//     }
//   });
// };

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (!data.length || data.message === "Not Found") {
      callback(error, null);
    } else {
      callback(null, data[0].description);
    }
  });
};


// module.exports = breedFetcher;
module.exports = {fetchBreedDescription};