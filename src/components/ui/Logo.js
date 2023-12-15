
import {  Center, Flex, Text} from "@chakra-ui/react";
import { CookieBiteSolid } from "../../data/svgIcon";
import { routes } from "../../routes";
import { Link } from "react-router-dom";



export const Logo = () => {
    return (
        <Flex>
             
            <Center>
               <Link to={routes.home} >
            <CookieBiteSolid boxSize="50px" color="#DD9F64"/>
            <Text as="b">MoMoekji</Text>
                </Link>
            </Center>
            
         </Flex>
      
    )
}