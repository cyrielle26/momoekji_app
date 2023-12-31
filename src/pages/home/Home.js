/** @format */

import {
	Container,
	Box,
	VStack,
	Text,
	Image,
	Flex,
	Skeleton,
} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { fetchRandomRecipes } from "./api"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Link } from "react-router-dom"
import { Loading } from "../../components/Loading"
import { motion, useScroll, useSpring } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useMediaQuery } from "@chakra-ui/react"

export const Home = () => {
	const [getRandomRecipesData, setGetRandomRecipesData] = useState(null)
	const [isLoaded, setIsLoaded] = useState(true)
	const [isLoading, setIsLoading] = useState(true)
	const { pathname } = useLocation()

	const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")
	const [isLargerThan900] = useMediaQuery("(min-width: 900px)")
	const [isLargerThan480] = useMediaQuery("(min-width: 480px)")

	useEffect(() => {
		// Add style to hide scroll bar
		document.body.style.overflowX = "hidden"

		const fetchData = async () => {
			try {
				const randomRecipes = await fetchRandomRecipes()
				setGetRandomRecipesData(randomRecipes.recipes)
			} catch (error) {
				console.error("Error:", error)
			} finally {
				setIsLoading(false)
				setIsLoaded(false)
			}
		}
		fetchData()
		// Remove the style to show the scroll bar when the component unmounts
		return () => {
			document.body.style.overflow = "auto"
		}
	}, [pathname])

	const { scrollYProgress } = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 50,
		damping: 30,
		restDelta: 0.001,
	})

	const params = {
		slidesPerView: 5.5,
		spaceBetween: 25,
		breakpoints: {
			900: {
				slidesPerView: 4.5,
				spaceBetween: 10,
			},
			640: {
				slidesPerView: 3.5,
				spaceBetween: 10,
			},
			480: {
				slidesPerView: 2.5,
				spaceBetween: 10,
			},
			320: {
				slidesPerView: 1.5,
				spaceBetween: 10,
			},
		},
	}

	return (
		<>
			<motion.div style={{ scaleX }} />
			{isLoading ? (
				<Loading />
			) : (
				getRandomRecipesData &&
				getRandomRecipesData.length > 0 && (
					<Container minHeight='full' minWidth='100vw'>
						<VStack
							mb={isLargerThan1280 ? "80px" : 0}
							pt={
								isLargerThan1280
									? "110px"
									: "70px" && isLargerThan900
									? "70px"
									: "100px" && isLargerThan480
									? "100px"
									: "70px"
							}>
							<Flex
								mx={"5%"}
								flexDirection={isLargerThan1280 ? "row" : "column"}
								my={
									isLargerThan1280
										? "0"
										: "5%" && isLargerThan480
										? "5%"
										: "10%"
								}>
								<Flex
									flexDirection='column'
									alignItems='flex-start'
									justifyContent='center'>
									<Text
										fontSize={
											isLargerThan1280
												? "28px"
												: "24px" && isLargerThan480
												? "24px"
												: " 18px"
										}>
										Don't know what to cook?
									</Text>
									<Text
										marginTop='22px'
										fontWeight={"400"}
										maxW={isLargerThan900 ? "65%" : "80%"}
										fontSize={isLargerThan1280 ? "18px" : "14px"}
										mb={isLargerThan1280 ? 0 : "8%"}>
										Looking for healthy straightforward recipes? <br />
										Check our recipes created by food content creators from all
										over the world!
									</Text>
								</Flex>
								<VStack>
									{getRandomRecipesData[0] && (
										<>
											<Link to={`/recipe/${getRandomRecipesData[0].id}`}>
												<Skeleton
													fitContent={true}
													isLoaded={isLoaded}
													startColor='#404040'
													endColor='#505050'
													speed={1}
													fadeDuration={1}>
													<Box
														w='100%'
														h={
															isLargerThan900
																? "60vh"
																: "50vh" && isLargerThan480
																? "50vh"
																: "30vh"
														}>
														<Image
															overflow='hidden'
															src={
																getRandomRecipesData[0].image ||
																"https://congtygiaphat104.com/template/Default/img/no.png"
															}
															alt={getRandomRecipesData[0].id}
															objectFit='cover'
															width='100%'
															height='100%'
															key={getRandomRecipesData[0].id}
															onLoad={() => setIsLoaded(true)} // Ensure isLoaded is set to true after the image is loaded
														/>
													</Box>
												</Skeleton>
											</Link>
											<Text
												fontSize={
													isLargerThan1280
														? "18px"
														: "16px" && isLargerThan900
														? "16px"
														: "14px"
												}>
												{getRandomRecipesData[0].title}
											</Text>
										</>
									)}
								</VStack>
							</Flex>
						</VStack>
						<Swiper {...params}>
							{getRandomRecipesData.slice(1).map((recipe) => (
								<SwiperSlide key={recipe.id}>
									<Link to={`/recipe/${recipe.id}`}>
										<Skeleton
											fitContent={true}
											isLoaded={isLoaded}
											startColor='#404040'
											endColor='#505050'
											speed={1}
											fadeDuration={1}>
											<Box
												width='100%'
												height={isLargerThan480 ? "300px" : "180px"}>
												<Image
													src={
														recipe.image ||
														"https://congtygiaphat104.com/template/Default/img/no.png"
													}
													alt={recipe.id}
													key={recipe.id}
													objectFit='cover'
													width='100%'
													height='100%'
													onLoad={() => setIsLoaded(true)}
													// Ensure isLoaded is set to true after the image is loaded
												/>
											</Box>
										</Skeleton>
									</Link>
									<Text fontSize={isLargerThan1280 ? "16px" : "14px"}>
										{recipe.title}
									</Text>
								</SwiperSlide>
							))}
						</Swiper>
					</Container>
				)
			)}
		</>
	)
}
