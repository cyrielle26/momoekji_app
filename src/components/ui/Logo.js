
import { Text, Center, Flex} from "@chakra-ui/react";
import {CookieBiteSolid } from "../../data/svgIcon";




export const Logo = () => {
    return (
        <Flex>
            <Center>
            <CookieBiteSolid boxSize="50px" color="#DD9F64"/>
                <Text as='b' fontSize={'18px'} paddingBottom={'20px'} >MoMoekji</Text>
                </Center>
    </Flex>
      
    )
}