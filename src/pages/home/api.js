import axios from 'axios';

export async function fetchRandomRecipes() {
    
const options = {
  method: 'GET',
  url: ' https://api.spoonacular.com/recipes/random',
  params: {
    limitLicense: 'true',
    number: '10'
  },
  headers: {
   
    'x-api-key': '2f2ae8801fb8459d9a65dfd2d7810de2',
  }
};

try {
  let response = await axios.request(options);
   return response.data;
} catch (error) {
  console.error(error.response);
   throw error;
}
}

 
