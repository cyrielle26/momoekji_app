import { Container, Box, VStack, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { fetchRandomRecipes } from "./api";
import { Loading } from "./../../components/Loading";

export const Home = () => {

    const [getRandomRecipesData, setGetRandomRecipesData] = useState(null);
    const [isLoading, setIsLoading] = useState();

     useEffect(() => {
    (async () => {
      try {
        const { results: randomRecipesResults } = await fetchRandomRecipes();
        setGetRandomRecipesData(randomRecipesResults );

      } catch (error) {
        console.error("Error :" + error);   
      }
      setIsLoading(false);
    })();
  }, []);



    return (

        <>
            {isLoading ? (
                <Loading/>
) : ( getRandomRecipesData && (
        <Container minHeight="100vh" minWidth="100vw">
                        <VStack>
                            {getRandomRecipesData.map(() => (
                <Box minWidth="100vw" height="595px"  my="150px" padding="25px">
                    <Text fontSize="48px" marginLeft="2%"> Don't know what to cook?</Text>
                    <Text marginLeft="2%" marginTop="35px">Looking for healthy straightforward recipes? <br/>
                            Check our recipes created by food content creators from all over the world! </Text>
        </Box> ))}
</VStack>
            </Container >
               ) )}
            </>
    )
}