import axios from 'axios';

export async function fetchRandomRecipes() {
    
const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
  params: {
    number: '20'
  },
  headers: {
    'x-api-key': '2f2ae8801fb8459d9a65dfd2d7810de2',
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}