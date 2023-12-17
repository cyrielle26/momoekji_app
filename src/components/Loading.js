import { Center} from "@chakra-ui/react";
import React from "react";
import { PacmanLoader } from "react-spinners";

export const Loading = () => {
  return (
 <Center pt="25%">
        <PacmanLoader color="#DD9F64" />
  </Center>
  );
};
