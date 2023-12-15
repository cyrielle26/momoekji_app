import { useState } from 'react';
import { Flex, Box, Input, Select, Button, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';

export const  Search = () => {
  const [keyword, setKeyword] = useState(null);
  const [diet, setDiet] = useState(null);
  const [exclude, setExclude] = useState(null);
  const [response, setResponse] = useState(null);

  const getRecipes = async () => {
    try {
      diet === 'none' ? (diet = '') : null;
      const res = await axios.get('api/search/', {
        params: { keyword, diet, exclude }
      });
      const { data } = res;
      setResponse(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex
      direction="column"
      align="center"
      px={[4, 12, 0]}
      minH="100vh"
      bg="background"
      fontFamily="raleway"
    >
      <Box mt={20}>
         <Heading as="h1" size="6xl" fontWeight="bold" color="active">
      Recipe Search
    </Heading>
    <Text color="primary" fontSize="2xl" fontWeight="light" mt={5}>
      Search recipes from all over the world.
    </Text>
      </Box>
      <Flex
        as="form"
        onSubmit={(e) => {
          getRecipes();
          e.preventDefault();
          e.stopPropagation();
        }}
        mt={20}
        maxW={['full', 'full', '4xl']}
        justify="center"
        direction="column"
        width="full"
      >
        <Input
          type="text"
          variant="filled"
          size="lg"
          placeholder="Enter a recipe"
          onChange={(e) => {
            setKeyword(e.target.value);
            setResponse(null);
          }}
        />
        <Flex mt={5} direction={['column', 'row']} justify="start">
          <Box width={['full', '1/3']} pr={[0, 10, 0]}>
            <label className="block text-primary text-sm">Diet</label>
            <Select
              variant="filled"
              size="lg"
              onChange={(e) => setDiet(e.target.value)}
            >
              {['none', 'pescetarian', 'lacto vegetarian', 'ovo vegetarian', 'vegan', 'vegetarian'].map((diet) => (
                <option value={diet} key={diet}>
                  {diet}
                </option>
              ))}
            </Select>
          </Box>
          <Box width={['full', '1/3']} pl={[0, 10, 0]} mt={[5, 0]}>
            <label className="block text-primary text-sm">Exclude Ingredients</label>
            <Input
              type="text"
              variant="filled"
              size="lg"
              placeholder="coconut"
              onChange={(e) => setExclude(e.target.value)}
            />
          </Box>
        </Flex>
        <Button
          mt={5}
          size="lg"
          colorScheme="teal"
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
}
