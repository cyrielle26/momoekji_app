/** @format */

import { Container, WrapItem, Wrap, Image, Skeleton } from "@chakra-ui/react"
import {
	fetchLabelWidget,
	fetchIngredientWidget,
	fetchEquipmentWidget,
	fetchRecipesInfo,
} from "./api"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Loading } from "../../components/Loading"

export const Detail = () => {
	const [labelWidgetData, setLabelWidgetData] = useState()
	const [ingredientWidgetData, setIngredientWidgetData] = useState()
	const [equipmentWidgetData, setEquipmentWidgetData] = useState()
	const [recipeInfo, setRecipeInfo] = useState()
	const [isLoaded, setIsLoaded] = useState(false)

	const { id } = useParams()

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch data for each widget type
				// const labelWidgetResponse = await fetchLabelWidget(id)
				// setLabelWidgetData(labelWidgetResponse)

				// const ingredientWidgetResponse = await fetchIngredientWidget(id)
				// setIngredientWidgetData(ingredientWidgetResponse)

				// const equipmentWidgetResponse = await fetchEquipmentWidget(id)
				// setEquipmentWidgetData(equipmentWidgetResponse)

				const recipeInfoResponse = await fetchRecipesInfo(id)
				setRecipeInfo(recipeInfoResponse)
			} catch (error) {
				console.error(error)
				// Handle errors as needed
			}
			setIsLoaded(false)
		}

		fetchData()
	}, [id])

	console.log(recipeInfo)

	return (
		<>
			{isLoaded ? (
				<Loading />
			) : (
				recipeInfo &&
				recipeInfo.length > 0 && (
					<Container minH='100vh' minW='100wv' bg={"red"}>
						<Wrap>
							{recipeInfo.map((recipe) => (
								<WrapItem>
									<Skeleton
										height='100%'
										isLoaded={isLoaded}
										fadeDuration={2}
										bg='#DD9F64'
									/>
									<Image
										src={
											recipe.image ||
											"https://congtygiaphat104.com/template/Default/img/no.png"
										}
										alt={recipe.id}
										objectFit='cover'
										width='312px'
										height='231px'></Image>
								</WrapItem>
							))}
						</Wrap>
					</Container>
				)
			)}
		</>
	)
}
;<Box>
	{labelWidgetData && (
		<Image
			src={labelWidgetData}
			alt='Nutrition Label'
			width={"100px"}
			height={"400px"}
		/>
	)}
</Box>
