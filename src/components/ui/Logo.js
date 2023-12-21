/** @format */

import { Center, Flex, Text } from "@chakra-ui/react"
import { CookieBiteSolid } from "../../data/svgIcon"
import { routes } from "../../routes"
import { Link } from "react-router-dom"
import { useMediaQuery } from "@chakra-ui/react"

export const Logo = () => {
	const [isLargerThan480] = useMediaQuery("(min-width: 480px)")
	const [isLargerThan360] = useMediaQuery("(min-width: 360px)")
	return (
		<Flex>
			<Center>
				<Link to={routes.home}>
					<CookieBiteSolid
						boxSize={
							isLargerThan480
								? "50px"
								: "35px" && isLargerThan360
								? "35px"
								: "25px"
						}
						color='#DD9F64'
					/>
					<Text as='b' fontSize={isLargerThan480 ? "18px" : "14px"}>
						MoMoekji
					</Text>
				</Link>
			</Center>
		</Flex>
	)
}
