import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Flex, Box, Input, Select, Button, Text, FormLabel,VStack, Image, Grid, Skeleton, GridItem,} from '@chakra-ui/react';
import searchHandler from './api';
import { PacmanLoader } from "react-spinners";



export const Search = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [response, setResponse] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
    

   const onSubmit = async (data) => {
    try {
     const { keyword, diet, exclude, include } = data;
    const responseData = await searchHandler(keyword, diet, exclude, include);

      setResponse(responseData.results);
    } catch (error) {
      console.error(error);
       }
  };

  
  return ( 
    <Flex
      direction="column"
      align="center"
      minH="100vh"
      fontFamily="Fira Code"
    >
      <VStack mt={20}>
        <Text fontSize="45px" fontWeight="bold" mt={5} >
          Recipe Search
        </Text>
        <Text fontSize="28px" fontWeight="light" mt={5}>
          Search recipes from all over the world.
        </Text>
      </VStack>
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        mt={20}
        maxW={['full', 'full', '4xl']}
        justify="center"
        direction="column"
        width="full"
      >
        <Input color="#808080"
          {...register('keyword')}
          type="text"
                  variant="filled"
                  focusBorderColor="#DD9F64"
          size="lg"
          placeholder="Enter a recipe"
          onChange={(e) => {
            setValue('keyword', e.target.value);
            setResponse(null);
          }
          }
        />
        <Flex mt={5} direction={['column', 'row']} justify="start">
          <Box width={['full', '1/3']} pr={[0, 10, 0]} >
            <FormLabel>Diet</FormLabel>
            <Select color="#808080"
              {...register('diet')}
                          variant="filled"
                          focusBorderColor="#DD9F64"
              size="lg"
              onChange={(e) => setValue('diet', e.target.value)}
                      >
              {['none', 'pescetarian', 'lacto vegetarian', 'ovo vegetarian', 'vegan', 'vegetarian','paleo'].map((diet) => (
                <option value={diet} key={diet}>
                  {diet}
                </option>
              ))}
            </Select>
          </Box>
          <Box width={['full', '1/3']} pl={[0, 10, 0]} mt={[5, 0]} marginLeft={"15px"} >
            <FormLabel>Exclude Ingredients</FormLabel>
            <Input color="#808080"
              {...register('exclude')}
              type="text"
              variant="filled"
              focusBorderColor="#DD9F64"
              size="lg"
              placeholder="ex: egg"
              onChange={(e) => setValue('exclude', e.target.value)}
            />
          </Box>
             <Box width={['full', '1/3']} pl={[0, 10, 0]} mt={[5, 0]} marginLeft={"15px"}>
            <FormLabel>Include Ingredients</FormLabel>
            <Input color="#808080"
              {...register('include')}
              type="text"
              variant="filled"
              focusBorderColor="#DD9F64"
              size="lg"
              placeholder="ex: honey"
              onChange={(e) => setValue('include', e.target.value)}
            />
          </Box>
        </Flex>
        <Button
          mt={7}
                  size="lg"
                  variant="solid"
                  colorScheme='orange'
                  bg="#DD9F64"
          color="#F9F9F9"
          type="submit"
        >
          Search
        </Button>
      </Flex>
{isLoading ? (
  <PacmanLoader color="#DD9F64" size={25} margin={4} />
) : (
  <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={100} width="80%">
    {response && response.length > 0 ? (
      response.map((recipe) => (
        <GridItem key={recipe.id} w="100%">
          <VStack>
            <Skeleton height="100%" isLoaded={isLoaded} fadeDuration={2} bg="#DD9F64">
              <Image
                key={recipe.id}
                src={recipe.image || "https://congtygiaphat104.com/template/Default/img/no.png"}
                alt={recipe.id}
                objectFit="cover"
                width="312px"
                height="231px"
                onLoad={() => setIsLoaded(true)}
              />
            </Skeleton>
            <Text fontSize="lg" fontWeight="bold" maxWidth="80%">
              {recipe.title}
            </Text>
          </VStack>
        </GridItem>
      ))
    ) : (
      response && response.length === 0 && <Text mt={5}>No recipes found</Text>
    )}
  </Grid>
)}


    </Flex>
  );
};
