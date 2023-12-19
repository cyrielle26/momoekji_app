/** @format */

import axios from "axios"
const baseWidgetUrl = `https://api.spoonacular.com/recipes/`

const header = {
	"x-api-key": "2f2ae8801fb8459d9a65dfd2d7810de2",
}

const widgetheader = {
	Accept: "image/png",
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
		url: baseWidgetUrl + `${id}/nutritionLabel.png`,
		params: {
			showOptionalNutrients: "false",
			showZeroValues: "false",
			showIngredients: "false",
		},
		headers: widgetheader,
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
		url: baseWidgetUrl + `${id}/ingredientWidget.png`,
		params: {
			defaultCss: "true",
		},
		headers: widgetheader,
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
		url: baseWidgetUrl + `${id}/equipmentWidget.png`,
		params: {
			defaultCss: "true",
		},
		headers: widgetheader,
	}

	try {
		let response = await axios.request(options)
		return response.data
	} catch (error) {
		console.error(error.response)
		throw error
	}
}
