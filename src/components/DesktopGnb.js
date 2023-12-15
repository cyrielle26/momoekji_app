import { HStack, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { routes } from "../routes";

export const DesktopGnb = () => {
    return (
        <HStack>
            <Link to={routes.home} fontSize="22px" as="b">Home</Link>
            <Spacer/>
            <Link to={routes.explore} fontSize="22px" as="b">Explore</Link>
        </HStack>
    )
}