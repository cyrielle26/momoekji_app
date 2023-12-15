import { Logo } from "./ui/Logo";
import { DesktopGnb } from "./DesktopGnb";
import {Flex, Spacer } from "@chakra-ui/react";

export const Header = () => {
    return (
        <Flex w={'100%'} h={'95px'} position={'absolute'} top={'0'} left={'0'} paddingLeft={'2%'} paddingRight={'5%'} >
            <Logo />
            <Spacer/>
            <DesktopGnb/>
        </Flex>
    )
}