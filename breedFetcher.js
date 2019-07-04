const request = require('request');

// https://api.thecatapi.com/v1/breeds/search
// https://api.thecatapi.com/v1/breeds/search?q=CATNAME

const args = process.argv.slice(2);

const breedFetcher = () => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (!data.length) {
      console.log('Sorry! That cat breed isn\'t found');
    } else if (data.message === "Not Found") {
      console.log(`Error ${data.status}`);
    } else {
      console.log(data[0].description);
    }
  });
};

breedFetcher();

