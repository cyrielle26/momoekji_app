/** @format */

import { Center, Container, useMediaQuery } from "@chakra-ui/react"
import React from "react"
import { PacmanLoader } from "react-spinners"

export const Loading = () => {
	const [isLargerThan480] = useMediaQuery("(min-width: 480px)")

	return (
		<Container
			minHeight={"80vh"}
			minWidth={"100vw"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}>
			<PacmanLoader color='#DD9F64' size={isLargerThan480 ? "25px" : "15px"} />
		</Container>
	)
}
