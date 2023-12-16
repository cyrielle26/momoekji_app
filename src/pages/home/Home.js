import { Container, Box, VStack, Text, Image, Flex, Skeleton, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fetchRandomRecipes } from "./api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

export const Home = () => {
  const [getRandomRecipesData, setGetRandomRecipesData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomRecipes = await fetchRandomRecipes();
        setGetRandomRecipesData(randomRecipes.recipes);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    setIsLoaded(false);
    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  const params = {
    slidesPerView: 4.5,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 4.5,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 4.3,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 3.2,
        spaceBetween: 10,
      },
    },
  };

  return (
    <>{isLoading ? (
      <Center pt="25%">
        <PacmanLoader color="#DD9F64" />
        </Center>
    ) : ( getRandomRecipesData && getRandomRecipesData.length > 0 && (
        <Container minHeight="100vh" minWidth="100vw">
          <VStack>
            <Flex minWidth="100vw" height="595px" my="120px">
              <Flex flexDirection="column" alignItems="flex-start" justifyContent="center" mx={"2%"}>
                <Text fontSize="48px">Don't know what to cook?</Text>
                <Text marginTop="35px">
                  Looking for healthy straightforward recipes? <br />
                  Check our recipes created by food content creators from all over the world!
                </Text>
              </Flex>
              <VStack mx={"2%"}>
                {getRandomRecipesData[0] && (
                  <>
                    <Link to={getRandomRecipesData[0].sourceUrl} target="_blank">
                      <Skeleton
                        height='100%'
                        isLoaded={isLoaded}
                        fadeDuration={2}
                        bg='#DD9F64'
                      >
                        <Image
                          overflow="hidden"
                          src={getRandomRecipesData[0].image || "https://congtygiaphat104.com/template/Default/img/no.png"}
                          alt={getRandomRecipesData[0].id}
                          objectFit="cover"
                          minWidth="46vw"
                          key={getRandomRecipesData[0].id}
                          onLoad={() => setIsLoaded(true)} // Ensure isLoaded is set to true after the image is loaded
                        />
                      </Skeleton>
                    </Link>
                    <Text>{getRandomRecipesData[0].title}</Text>
                  </>
                )}
              </VStack>
            </Flex>
          </VStack>
          <Swiper {...params}>
            {getRandomRecipesData.map((recipe) => (
              <SwiperSlide key={recipe.id}>
                <Link to={recipe.sourceUrl} target="_blank">
                  <Skeleton
                    height='100%'
                    isLoaded={isLoaded}
                    fadeDuration={2}
                    bg='#DD9F64'
                  >
                    <Box width="100%" height="300px">
                      <Image
                        src={recipe.image || "https://congtygiaphat104.com/template/Default/img/no.png"}
                        alt={recipe.id}
                        key={recipe.id}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        onLoad={() => setIsLoaded(true)} // Ensure isLoaded is set to true after the image is loaded
                      />
                    </Box>
                  </Skeleton>
                </Link>
                <Text>{recipe.title}</Text>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      )
      )}
    </>
  );
};
