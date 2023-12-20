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
	Icon,
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
import { Link } from "react-router-dom"
import { ChevronRightIcon } from "@chakra-ui/icons"

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

	const textStyle = {
		fontWeight: "bold",
		color: "#DD9F64",
		fontSize: "16px",
	}

	const linkStyle = {
		color: "#DD9F64",
		textDecoration: "underline",
		fontSize: "16px",
	}

	return (
		<>
			{
				isLoaded ? (
					<Loading />
				) : (
					recipeInfo && (
						// recipeInfo.length > 0 && (

						<Container minHeight='100vh' minWidth='100vw'>
							<Center>
								<Wrap
									minWidth='80wv'
									pt='150px'
									display='flex'
									justifyContent='center'>
									<VStack>
										<Wrap width='100%'>
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
											<Box
												display='flex'
												flexDirection='column'
												justifyContent='space-around'
												alignItems='center'
												padding='2rem'>
												<Text fontSize={"28px"}>{recipeInfo.title}</Text>

												<Box
													display='flex'
													flexDirection='column'
													alignItems='center'>
													<Text>Ready in</Text>
													<Circle
														borderRadius={"50%"}
														bg={"#DD9F64"}
														size='50px'>
														{recipeInfo.readyInMinutes}
													</Circle>
													<Text>Minutes</Text>
													<Text mt='20px'>
														{" "}
														Recipe form :{" "}
														<span style={textStyle}>
															{recipeInfo.sourceName}
														</span>
													</Text>
													<Link to={recipeInfo.sourceUrl} style={linkStyle}>
														Go check the recipe here{" "}
														<Icon>icon={<ChevronRightIcon />}</Icon>
													</Link>
												</Box>
											</Box>
										</Wrap>
										<Wrap>
											<Box bg='pink' width='100%' height='600px'></Box>
										</Wrap>
									</VStack>
								</Wrap>
							</Center>
						</Container>
					)
				)
				// )
			}
		</>
	)
}
