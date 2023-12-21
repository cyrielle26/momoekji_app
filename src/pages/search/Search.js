/** @format */

import { useForm } from "react-hook-form"
import { useState } from "react"
import {
	Flex,
	Box,
	Input,
	Select,
	Button,
	Text,
	FormLabel,
	VStack,
	Image,
	Grid,
	Skeleton,
	GridItem,
	HStack,
	IconButton,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import searchHandler from "./api"
import { Loading } from "../../components/Loading"
import { Link } from "react-router-dom"
import { useMediaQuery } from "@chakra-ui/react"

export const Search = () => {
	const { register, handleSubmit, setValue } = useForm()
	const [response, setResponse] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [isLoaded, setIsLoaded] = useState(true)
	const [isLargerThan1040] = useMediaQuery("(min-width: 1040px)")
	const [isLargerThan900] = useMediaQuery("(min-width: 900px)")
	const [isLargeThan695] = useMediaQuery("(min-width: 695px)")
	const [isLargerThan600] = useMediaQuery("(min-width: 600px)")
	const [isLargerThan480] = useMediaQuery("(min-width: 480px)")

	const onSubmit = async (data) => {
		setIsLoading(true)
		setIsLoaded(false)
		try {
			const { keyword, diet, exclude, include } = data
			const responseData = await searchHandler(keyword, diet, exclude, include)

			setResponse(responseData.results)
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false) // Stop loading after the data is fetched or an error occurs
		}
	}

	return (
		<>
			<Flex
				direction='column'
				align='center'
				minH='100vh'
				fontFamily='Fira Code'
				p={isLargerThan900 ? 0 : "5%"}>
				<VStack mt={20}>
					<Text
						fontSize={
							isLargerThan900
								? "45px"
								: "38px" && isLargerThan480
								? "38px"
								: "28px" && isLargerThan480
								? "28px"
								: "26px"
						}
						fontWeight='bold'
						mt={5}>
						Recipe Search
					</Text>
					<Text
						fontSize={
							isLargerThan900
								? "28px"
								: "22px" && isLargerThan600
								? "22px"
								: "16px" && isLargerThan480
								? "16px"
								: "14px"
						}
						fontWeight='light'
						mt={5}>
						Search recipes from all over the world.
					</Text>
				</VStack>
				<Flex
					as='form'
					onSubmit={handleSubmit(onSubmit)}
					mt={20}
					maxW={["full", "full", "3xl"]}
					justify='center'
					direction='column'
					width='full'>
					<Input
						color='#808080'
						{...register("keyword")}
						type='text'
						variant='filled'
						focusBorderColor='#DD9F64'
						size='lg'
						placeholder='Enter a recipe'
						onChange={(e) => {
							setValue("keyword", e.target.value)
							setResponse(null)
						}}
					/>
					<Flex mt={5} direction={["column", "row"]} justify='start'>
						<Box
							width={["full"]}
							pr={[0, 1]}
							mt={isLargeThan695 ? 0 : "24px" && isLargerThan480 ? "24px" : 0}>
							<FormLabel>Diet</FormLabel>
							<Select
								color='#808080'
								{...register("diet")}
								variant='filled'
								focusBorderColor='#DD9F64'
								size='lg'
								onChange={(e) => setValue("diet", e.target.value)}>
								{[
									"none",
									"pescetarian",
									"lacto vegetarian",
									"ovo vegetarian",
									"vegan",
									"vegetarian",
									"paleo",
								].map((diet) => (
									<option value={diet} key={diet}>
										{diet}
									</option>
								))}
							</Select>
						</Box>
						<Box
							width={["full"]}
							pl={[0, 1]}
							mt={[5, 0]}
							marginLeft={isLargerThan480 ? "15px" : "0"}>
							<FormLabel>Exclude Ingredients</FormLabel>
							<Input
								color='#808080'
								{...register("exclude")}
								type='text'
								variant='filled'
								focusBorderColor='#DD9F64'
								size='lg'
								placeholder='ex: egg'
								onChange={(e) => setValue("exclude", e.target.value)}
							/>
						</Box>
						<Box
							width={["full"]}
							pl={[0, 2]}
							mt={[5, 0]}
							marginLeft={isLargerThan480 ? "15px" : "0"}>
							<FormLabel>Include Ingredients</FormLabel>
							<Input
								color='#808080'
								{...register("include")}
								type='text'
								variant='filled'
								focusBorderColor='#DD9F64'
								size='lg'
								placeholder='ex: honey'
								onChange={(e) => setValue("include", e.target.value)}
							/>
						</Box>
					</Flex>
					<Button
						mt={7}
						size='lg'
						variant='solid'
						colorScheme='orange'
						bg='#DD9F64'
						color='#F9F9F9'
						type='submit'>
						Search
					</Button>
				</Flex>
				{isLoading ? (
					<Loading />
				) : (
					<Grid
						templateColumns={
							isLargerThan1040
								? "repeat(5, 1fr)"
								: "repeat(4, 1fr)" && isLargerThan900
								? "repeat(4, 1fr)"
								: "repeat(3, 1fr)" && isLargerThan600
								? "repeat(3, 1fr)"
								: "repeat(2, 1fr)" && isLargerThan480
								? "repeat(2, 1fr)"
								: "repeat(1, 1fr)"
						}
						gap={6}
						mt={100}
						width='80%'>
						{response && response.length > 0
							? response.map((recipe) => (
									<GridItem key={recipe.id} w='100%'>
										<VStack>
											<Link to={`/recipe/${recipe.id}`}>
												<Skeleton
													fitContent={true}
													isLoaded={isLoaded}
													startColor='#404040'
													endColor='#505050'
													speed={1}
													fadeDuration={1}>
													<Image
														key={recipe.id}
														src={
															recipe.image ||
															"https://congtygiaphat104.com/template/Default/img/no.png"
														}
														alt={recipe.id}
														objectFit='cover'
														width='312px'
														height='231px'
														onLoad={() => setIsLoaded(true)}
													/>
												</Skeleton>
												<HStack>
													<Text
														fontSize={isLargerThan900 ? "lg" : "medium"}
														fontWeight='bold'
														maxWidth='80%'>
														{recipe.title}
													</Text>
												</HStack>
												<IconButton
													onClick={() => {}}
													icon={<ChevronRightIcon />}
													bg='#DD9F64'
													borderRadius='40px'
													size='50px'
												/>
											</Link>
										</VStack>
									</GridItem>
							  ))
							: response &&
							  response.length === 0 && <Text mt={5}>No recipes found</Text>}
					</Grid>
				)}
			</Flex>
		</>
	)
}
