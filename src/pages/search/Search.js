import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Flex, Box, Input, Select, Button, Text, FormLabel,VStack, Image} from '@chakra-ui/react';
import searchHandler from './api';
import { Link } from 'react-router-dom';


export const Search = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [response, setResponse] = useState(null);
    

   const onSubmit = async (data) => {
    try {
     const { keyword, diet, exclude } = data;
    const responseData = await searchHandler(keyword, diet, exclude);

      setResponse(responseData.results);
    } catch (error) {
      console.error(error);
       }
    
  };
   console.log(response);
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
          <Box width={['full', '1/3']} pr={[0, 10, 0]} marginRight="30px">
            <FormLabel>Diet</FormLabel>
            <Select color="#808080"
              {...register('diet')}
                          variant="filled"
                          focusBorderColor="#DD9F64"
              size="lg"
              onChange={(e) => setValue('diet', e.target.value)}
                      >
              {['none', 'pescetarian', 'lacto vegetarian', 'ovo vegetarian', 'vegan', 'vegetarian'].map((diet) => (
                <option value={diet} key={diet}>
                  {diet}
                </option>
              ))}
            </Select>
          </Box>
          <Box width={['full', '1/3']} pl={[0, 10, 0]} mt={[5, 0]}>
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
        </Flex>
        <Button
          mt={5}
                  size="lg"
                  variant="solid"
                  colorScheme='orange'
                  bg="#DD9F64"
                //   colorScheme='#9a6542'
          color="#F9F9F9"
          type="submit"
        >
          Search
        </Button>
      </Flex>

      {response && (
        <Box mt={10}>
          <Flex mt={6} gridGap={8} direction={['column', 'row']} gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}>
            {response.map((recipe) => (
              <Box key={recipe.id} pt={6}>
                <Box>
                  <Box>
                    <Flex items="center" justify="center">
                      <Box p={2}>
                        <Image
                          src={recipe.image}
                          alt={recipe.id}
                        />
                      </Box>
                    </Flex>
                    <Flex direction="column" align="center" justify="center">
                      <Box mt={4} fontSize="lg" fontWeight="bold" w="full" overflowX="auto" color="primary" className="break-words">
                        {recipe.title}
                      </Box>
                      <Box mt={2} fontSize="sm">
                        Ready in {recipe.readyInMinutes} minutes - {recipe.servings} Servings
                      </Box>
                      <Link mt={4} fontSize="sm" color="#DD9F64" to={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
                        Go to Recipe
                      </Link>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      )}
    </Flex>
  );
};
