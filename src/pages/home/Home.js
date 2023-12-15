import { Container, Box, VStack, Text } from "@chakra-ui/react"

export const Home = () => {
    return (
        <Container minHeight="100vh" minWidth="100vw">
            <VStack>
                <Box minWidth="100vw" height="595px"  my="150px" padding="25px">
                    <Text fontSize="48px" marginLeft="2%"> Don't know what to cook?</Text>
                    <Text marginLeft="2%" marginTop="35px">Looking for healthy straightforward recipes? <br/>
                            Check our recipes created by food content creators from all over the world! </Text>
        </Box>
</VStack>
        </Container>
    )
}