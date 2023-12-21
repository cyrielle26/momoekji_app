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
	const [isLargerThan900] = useMediaQuery("(min-width: 900px)")
	const [isLargerThan480] = useMediaQuery("(min-width: 480px)")
	const [isLargerThan380] = useMediaQuery("(min-width: 380px)")

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
		fontSize: isLargerThan380 ? "16px" : "14px",
	}

	const linkStyle = {
		color: "#DD9F64",
		textDecoration: "underline",
		fontSize: isLargerThan380 ? "16px" : "14px",
	}

	return (
		<>
			{
				isLoading ? (
					<Loading />
				) : (
					recipeInfo && (
						<Container
							minWidth={"full"}
							minHeight={"100vh"}
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							flexDirection={isLargerThan900 ? "row" : "column"}>
							<Box mt={"50px"}>
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
									fontSize={
										isLargerThan480
											? "24px"
											: "18px" && isLargerThan380
											? "18px"
											: "16px"
									}>
									{recipeInfo.title}
								</Text>

								<Box
									display='flex'
									flexDirection={"column"}
									alignItems='center'>
									<VStack
										display='flex'
										flexDirection='column'
										mb='30px'
										mt={"30px"}>
										<Text fontSize={isLargerThan480 ? "16px" : "14px"}>
											Ready in
										</Text>
										<Circle
											borderRadius={"50%"}
											bg={"#DD9F64"}
											size={isLargerThan480 ? "50px" : "35px"}>
											{recipeInfo.readyInMinutes}
										</Circle>
										<Text fontSize={isLargerThan480 ? "16px" : "14px"}>
											Minutes
										</Text>
									</VStack>
									<Text fontSize={isLargerThan480 ? "16px" : "14px"}>
										{" "}
										Recipe form :{" "}
										<span style={textStyle}>{recipeInfo.sourceName}</span>
									</Text>
									<Link
										to={recipeInfo.sourceUrl}
										style={linkStyle}
										target='_blank'>
										Go check the recipe here{" "}
										<Icon>icon={<ChevronRightIcon />}</Icon>
									</Link>
								</Box>
							</Box>

							{/* <Wrap>
											<Box bg='pink' width='100%' height='600px'></Box>
										</Wrap> */}
						</Container>
					)
				)
				// )
			}
		</>
	)
}
