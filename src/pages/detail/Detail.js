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
import { fetchRecipesInfo } from "./api"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Loading } from "../../components/Loading"
import { Link } from "react-router-dom"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { useMediaQuery } from "@chakra-ui/react"

export const Detail = () => {
	const [recipeInfo, setRecipeInfo] = useState()
	const [isLoaded, setIsLoaded] = useState(true)
	const [isLoading, setIsLoading] = useState(true)
	const [isLargerThan480] = useMediaQuery("(min-width: 480px)")

	const { id } = useParams()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const recipeInfoResponse = await fetchRecipesInfo(id)
				setRecipeInfo(recipeInfoResponse)
			} catch (error) {
				console.error(error)
				// Handle errors as needed
			} finally {
				setIsLoading(false)
				setIsLoaded(false)
			}
		}

		fetchData()
	}, [id])

	console.log(recipeInfo)

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
				isLoading ? (
					<Loading />
				) : (
					recipeInfo && (
						<Container minWidth={"full"}>
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
														startColor='#404040'
														endColor='#505050'
														fadeDuration={2}>
														<Image
															src={
																recipeInfo.image ||
																"https://congtygiaphat104.com/template/Default/img/no.png"
															}
															alt={recipeInfo.id}
															objectFit='cover'
															width='556px'
															height='370px'
															onLoad={() => setIsLoaded(true)}
														/>
													</Skeleton>
												</Wrap>
											</Box>
											<Box
												display='flex'
												flexDirection='column'
												justifyContent='space-around'
												alignItems='center'
												padding='2rem'>
												<Text
													fontSize={isLargerThan480 ? "24px" : "18px"}
													pb={isLargerThan480 ? 0 : "25px"}>
													{recipeInfo.title}
												</Text>

												<Box
													display='flex'
													flexDirection='column'
													alignItems='center'>
													<VStack
														display='flex'
														flexDirection='column'
														mb='30px'>
														<Text fontSize={isLargerThan480 ? "16px" : "14px"}>
															Ready in
														</Text>
														<Circle
															borderRadius={"50%"}
															bg={"#DD9F64"}
															size='50px'>
															{recipeInfo.readyInMinutes}
														</Circle>
														<Text fontSize={isLargerThan480 ? "16px" : "14px"}>
															Minutes
														</Text>
													</VStack>
													<Text fontSize={isLargerThan480 ? "16px" : "14px"}>
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
										{/* <Wrap>
											<Box bg='pink' width='100%' height='600px'></Box>
										</Wrap> */}
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
