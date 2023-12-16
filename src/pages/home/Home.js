import { Container, Box, VStack, Text, Image } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { fetchRandomRecipes } from "./api";
import { Loading } from "./../../components/Loading";

export const Home = () => {

    const [getRandomRecipesData, setGetRandomRecipesData] = useState(null);
    const [isLoading, setIsLoading] = useState();

 useEffect(() => {
    const fetchData = async () => {
      try {
        const randomRecipes = await fetchRandomRecipes();
        setGetRandomRecipesData(randomRecipes.recipes);
      } catch (error) {
        console.error('Error:', error);
         setIsLoading(false);
      }
        
   };
 
    fetchData(); // Call the fetchData function when the component mounts
  }, []);



  console.log(getRandomRecipesData);

    return (
 <>
      {isLoading ? (
        <Loading />
      ) : (
        getRandomRecipesData && getRandomRecipesData.length > 0 && (
          <Container minHeight="100vh" minWidth="100vw" bg={"yellow"}>
            <VStack>
              {getRandomRecipesData.map((recipe) => (
                <Box minWidth="100vw" height="595px" my="150px" padding="25px" key={recipe.id}>
                  <Image src={recipe.image} alt={recipe.id} objectFit='cover' />
                  <Text fontSize="48px" marginLeft="2%">
                    Don't know what to cook?
                  </Text>
                  <Text marginLeft="2%" marginTop="35px">
                    Looking for healthy straightforward recipes? <br />
                    Check our recipes created by food content creators from all over the world!
                  </Text>
                </Box>
              ))}
            </VStack>
          </Container>
        )
      )}
    </>
    )
}