import { Link } from "react-router-dom";
import { Home } from "../home/Home";
import { Container, Heading, Text } from "@chakra-ui/react";

export const PageNotFound = () => {
    return (
        <Container minw="100wv" minh="100vh">
               
      <Heading>An error as occured.</Heading>
      <Text>
        <span> (╯°□°）╯︵ ┻━┻ </span>
      </Text>
      <Link to={<Home />}>Go back</Link>
    </Container>
      )
}