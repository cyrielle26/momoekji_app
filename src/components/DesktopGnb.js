import { HStack, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { MagnifyingGlassSolid } from "../data/svgIcon";

export const DesktopGnb = () => {
    return (
        <HStack width={'250px'} fontSize={"20px"} >
         
            <Link to={routes.home} >Home</Link>
            <Spacer/>
            <Link to={routes.explore} >
<MagnifyingGlassSolid boxSize="20px" marginRight="5px"/>
                Explore</Link>
        </HStack>
    )
}