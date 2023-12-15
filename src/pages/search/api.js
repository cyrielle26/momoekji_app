
// Import the axios library
const axios = require('axios');

// Define your search parameters
const searchParams = {
  keyword: 'your_keyword',
  diet: 'your_diet',
  exclude: 'your_exclude',
};

// Set up the Axios request configuration
const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
  params: {
    query: searchParams.keyword,
    diet: searchParams.diet,
    excludeIngredients: searchParams.exclude,
    number: '20',
    offset: '0',
  },
  headers: {
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    'x-rapidapi-key': '24f6a62400msh67c926e8c99c3f0p19f8b0jsn220509b0f952',
  },
};

// Make the Axios request
axios(options)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error.response);
  });
