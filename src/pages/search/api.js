import axios from 'axios';

export default async function searchHandler(keyword, diet, exclude) {
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    params: {
      query: keyword,
      diet: diet,
      excludeIngredients: exclude,
      number: '20',
      offset: '0',
    },
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': '24f6a62400msh67c926e8c99c3f0p19f8b0jsn220509b0f952',
    },
  };

  try {
    let response = await axios(options);
    return response.data;
  } catch (error) {
    console.error(error.response);
    throw error;
  }
}
