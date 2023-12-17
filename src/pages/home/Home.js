import { Container, Box, VStack, Text, Image, Flex, Skeleton, } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fetchRandomRecipes } from "./api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const [getRandomRecipesData, setGetRandomRecipesData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { pathname } = useLocation();

  useEffect(() => {
    // Add style to hide scroll bar
    document.body.style.overflow = "hidden";

    const fetchData = async () => {
      try {
        const randomRecipes = await fetchRandomRecipes();
        setGetRandomRecipesData(randomRecipes.recipes);
      } catch (error) {
        console.error('Error:', error);
      }
      setIsLoading();
    };

    fetchData();

    // Remove the style to show the scroll bar when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [pathname]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomRecipes = await fetchRandomRecipes();
        setGetRandomRecipesData(randomRecipes.recipes);
      } catch (error) {
        console.error('Error:', error);
      }
      setIsLoading();
    };
    
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
    <>
       <motion.div  style={{ scaleX }}/>
      {isLoading ? (
     <Loading/>
    ) : ( getRandomRecipesData && getRandomRecipesData.length > 0 && (
        <Container minHeight="100vh" minWidth="100vw">
          <VStack padding="5%">
            <Flex mx={"5%"}>
              <Flex flexDirection="column" alignItems="flex-start" justifyContent="center" >
                <Text fontSize="32px">Don't know what to cook?</Text>
                <Text marginTop="22px" maxW="70%">
                  Looking for healthy straightforward recipes? <br />
                  Check our recipes created by food content creators from all over the world!
                </Text>
              </Flex>
              <VStack>
                {getRandomRecipesData[0] && (
                  <>
                    
                    <Link to={getRandomRecipesData[0].sourceUrl} target="_blank">
                      <Skeleton
                        height='100%'
                        isLoaded={isLoaded}
                        fadeDuration={2}
                        bg='#DD9F64'
                      >
                        <Box w="100%" h="60vh" minWidth="46vw">
                        <Image
                          overflow="hidden"
                          src={getRandomRecipesData[0].image || "https://congtygiaphat104.com/template/Default/img/no.png"}
                          alt={getRandomRecipesData[0].id}
                          objectFit="cover"
                          width="100%"
                          height="100%"
                          key={getRandomRecipesData[0].id}
                          onLoad={() => setIsLoaded(true)} // Ensure isLoaded is set to true after the image is loaded
                          />
                          </Box>
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
              <SwiperSlide key={recipe.id} >
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
