/** @format */

import axios from "axios"
const baseWidgetUrl = `https://api.spoonacular.com/recipes/`

const header = {
	"x-api-key": "2f2ae8801fb8459d9a65dfd2d7810de2",
}

export async function fetchRecipesInfo(id) {
	const options = {
		method: "GET",
		url: baseWidgetUrl + `${id}/information`,
		params: {
			IncludeNutrion: "true",
		},
		headers: header,
	}

	try {
		let response = await axios.request(options)
		return response.data
	} catch (error) {
		console.error(error.response)
		throw error
	}
}

export async function fetchLabelWidget(id) {
	const options = {
		method: "GET",
		url: baseWidgetUrl + `${id}/nutritionLabel`,
		params: {
			defaultCss: "true",
			showOptionalNutrients: "false",
			showZeroValues: "false",
			showIngredients: "false",
		},
		headers: header,
	}

	try {
		let response = await axios.request(options)
		return response.data
	} catch (error) {
		console.error(error.response)
		throw error
	}
}

export async function fetchIngredientWidget(id) {
	const options = {
		method: "GET",
		url: baseWidgetUrl + `${id}/ingredientWidget`,
		params: {
			defaultCss: "true",
		},
		headers: header,
	}

	try {
		let response = await axios.request(options)
		return response.data
	} catch (error) {
		console.error(error.response)
		throw error
	}
}

export async function fetchEquipmentWidget(id) {
	const options = {
		method: "GET",
		url: baseWidgetUrl + `${id}/EquipmentWidget`,
		params: {
			defaultCss: "true",
		},
		headers: header,
	}

	try {
		let response = await axios.request(options)
		return response.data
	} catch (error) {
		console.error(error.response)
		throw error
	}
}
