import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Flex, Box, Input, Select, Button, Heading, Text, FormLabel } from '@chakra-ui/react';
import searchHandler from './api';


export const Search = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [response, setResponse] = useState(null);
    

   const onSubmit = async (data) => {
    try {
     const { keyword, diet, exclude } = data;
      diet === 'none' ? (diet = '') : null;
      const responseData = await searchHandler(keyword, diet, exclude);

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
      <Box mt={20}>
        <Text fontSizesize="45px" fontWeight="bold" >
          Recipe Search
        </Text>
        <Text fontSize="28px" fontWeight="light" mt={5}>
          Search recipes from all over the world.
        </Text>
      </Box>
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        mt={20}
        maxW={['full', 'full', '4xl']}
        justify="center"
        direction="column"
        width="full"
      >
        <Input
          {...register('keyword')}
          type="text"
          variant="filled"
          size="lg"
          placeholder="Enter a recipe"
          onChange={(e) => {
            setValue('keyword', e.target.value);
            setResponse(null);
          }
          }
        />
        <Flex mt={5} direction={['column', 'row']} justify="start">
          <Box width={['full', '1/3']} pr={[0, 10, 0]}>
            <FormLabel>Diet</FormLabel>
            <Select
              {...register('diet')}
              variant="filled"
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
            <FormLabel className="text-primary text-sm">Exclude Ingredients</FormLabel>
            <Input
              {...register('exclude')}
              type="text"
              variant="filled"
              size="lg"
              placeholder="ex: egg"
              onChange={(e) => setValue('exclude', e.target.value)}
            />
          </Box>
        </Flex>
        <Button
          mt={5}
          size="lg"
          colorScheme="#DD9F64"
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
                <Box className="flow-root bg-light rounded-lg px-4 pb-8">
                  <Box className="-mt-6">
                    <Flex items="center" justify="center">
                      <Box p={2}>
                        <img
                          src={`https://spoonacular.com/recipeImages/${recipe.image}`}
                          className="w-full h-full rounded-lg"
                          alt={recipe.id}
                        />
                      </Box>
                    </Flex>
                    <Flex direction="column" align="center" justify="center">
                      <Box mt={4} fontSize="lg" fontWeight="bold" w="full" overflowX="auto" color="primary" className="break-words">
                        {recipe.title}
                      </Box>
                      <Box mt={2} fontSize="sm" color="secondary" as="span" block>
                        Ready in {recipe.readyInMinutes} minutes - {recipe.servings} Servings
                      </Box>
                      <Box mt={4} fontSize="sm" color="active" as="a" href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
                        Go to Recipe
                      </Box>
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
