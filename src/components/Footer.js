import { Flex, Divider, Text } from "@chakra-ui/react"
export const Footer = () => {
    return (
        < Flex w={'100%'} h={'95px'} flexDirection="column" alignItems="center" pt="100px"  >
         
            <Divider minW="100wv" />
            <Text  py="50px"      > &copy; 2023 Cpcoding
            </Text>
                
        </Flex>)
}