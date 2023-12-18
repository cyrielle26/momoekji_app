import { Logo } from "./ui/Logo";
import { DesktopGnb } from "./DesktopGnb";
import { Flex, Spacer } from "@chakra-ui/react";
import { useEffect, useRef } from "react";


export const Header = () => {
     const headerRef = useRef();

  useEffect(() => {
    const scrollHandler = () => {
      const pageY = window.scrollY;

      if (pageY > 200) {
        headerRef.current.style.position = "fixed";
        headerRef.current.style.backgroundColor = "rgba(0,0,0,0.7)";
        headerRef.current.style.backdropFilter = "blur(3px)";
      } else {
        headerRef.current.style.position = "absolute";
        headerRef.current.style.backgroundColor = "transparent";
        headerRef.current.style.backdropFilter = "blur(0px)";
      }
    };

    window.addEventListener("scroll", scrollHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [headerRef]);
    
    return (
        <Flex w={'100%'} h={'95px'} position={'absolute'} top={'0'} left={'0'} paddingLeft={'2%'} paddingRight={'5%'} ref={headerRef} zIndex="999" >
            <Logo />
            <Spacer/>
            <DesktopGnb/>
        </Flex>
    )
}