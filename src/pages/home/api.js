import axios from 'axios';

export async function fetchRandomRecipes() {
    
const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
  params: {
    tags: 'vegetarian,dessert',
    number: '20'
  },
  headers: {
    'X-RapidAPI-Key': '24f6a62400msh67c926e8c99c3f0p19f8b0jsn220509b0f952',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}