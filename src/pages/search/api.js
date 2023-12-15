import axios from 'axios';

export default async function searchHandler(keyword, diet, exclude) {
  const options = {
    method: 'GET',
    url: 'https://api.spoonacular.com/recipes/complexSearch',
    params: {
      query: keyword,
      diet: diet,
      excludeIngredients: exclude,
      number: '20',
      offset: '0',
    },
    headers: {
 
      'x-api-key': '2f2ae8801fb8459d9a65dfd2d7810de2',
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
