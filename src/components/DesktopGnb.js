/** @format */

import { HStack, Spacer, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { routes } from "../routes"
import { MagnifyingGlassSolid } from "../data/svgIcon"
import { useMediaQuery } from "@chakra-ui/react"

export const DesktopGnb = () => {
	const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
	const [isLargerThan480] = useMediaQuery("(min-width: 480px)")
	const [isLargerThan380] = useMediaQuery("(min-width: 380px)")
	const [isLargerThan360] = useMediaQuery("(min-width: 360px)")
	return (
		<HStack width={isLargerThan380 ? "250px" : "50px"} fontSize={"20px"}>
			<Link
				to={routes.home}
				style={{ display: isLargerThan768 ? "block" : "none" }}>
				Home
			</Link>
			<Spacer />
			<Link to={routes.explore}>
				<HStack>
					<MagnifyingGlassSolid
						boxSize={isLargerThan480 ? "20px" : "16px"}
						marginRight={isLargerThan480 ? "5px" : "2px"}
					/>
					<Text
						fontSize={isLargerThan480 ? "18px" : "16px"}
						style={{ display: isLargerThan380 ? "block" : "none" }}>
						Explore
					</Text>
				</HStack>
			</Link>
		</HStack>
	)
}
