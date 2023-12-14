import { Logo } from "./ui/Logo";
import {Flex } from "@chakra-ui/react";

export const Header = () => {
    return (
        <Flex w={'100%'} h={'95px'}  bg={'red'} position={'absolute'} top={'0'} left={'0'} paddingLeft={'90px'} paddingRight={'90px'}>
        <Logo/>
        </Flex>
    )
}