/** @format */

import {
	Container,
	WrapItem,
	Wrap,
	Image,
	Skeleton,
	Center,
	Box,
	Text,
	Flex,
	HStack,
	Spacer,
	VStack,
	Stack,
	Circle,
} from "@chakra-ui/react"
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
	// console.log(ingredientWidgetData)
	// console.log(equipmentWidgetData)
	// console.log(labelWidgetData)

	return (
		<>
			{
				isLoaded ? (
					<Loading />
				) : (
					recipeInfo && (
						// recipeInfo.length > 0 && (

						<Container minHeight='100vh' minWidth='100vw'>
							<Wrap minWidth='80wv' bg='blue' pt='150px'>
								<Center>
									<Box>
										<Wrap>
											<Skeleton
												height='100%'
												isLoaded={isLoaded}
												fadeDuration={2}
												bg='#DD9F64'
											/>
											<Image
												src={
													recipeInfo.image ||
													"https://congtygiaphat104.com/template/Default/img/no.png"
												}
												alt={recipeInfo.id}
												objectFit='cover'
												width='556px'
												height='370px'
											/>
										</Wrap>
									</Box>
									<Stack bg={"green"}>
										<Wrap>
											<Text fontSize={"20px"}>{recipeInfo.title}</Text>
										</Wrap>
										<Wrap>
											<Circle borderRadius={"50%"} bg={"#DD9F64"} size='50px'>
												{recipeInfo.readyInMinutes}
											</Circle>
											<Text>Minutes</Text>
										</Wrap>
									</Stack>
								</Center>
							</Wrap>
						</Container>
					)
				)
				// )
			}
		</>
	)
}
