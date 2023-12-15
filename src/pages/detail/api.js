import axios from 'axios';
const baseWidgetUrl = `https://api.spoonacular.com/recipes/`;

const header = {
  Accept: 'text/html',
  'X-RapidAPI-Key': '2f2ae8801fb8459d9a65dfd2d7810de2',
};

export default async function fetchLabelWidget(res, id) {
  const options = {
    method: 'GET',
    url: baseWidgetUrl + `${id}/nutritionLabel`,
    params: {
      defaultCss: 'true',
      showOptionalNutrients: 'false',
      showZeroValues: 'false',
      showIngredients: 'false',
    },
    headers: header, 
  };

  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}



export default async function fetchIngredientWidget(res, id) {

  const options = {
    method: 'GET',
      url: baseWidgetUrl + `${id}/ingredientWidget`,
      params: {
        defaultCss: 'true',
    },
    headers: header, 
  };

  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default async function fetchEquipmentWidget(res, id) {

  const options = {
    method: 'GET',
      url: baseWidgetUrl + `${id}/EquipmentWidget`,
    params: {
        defaultCss: 'true',
    },
    headers: header, 
  };

  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


