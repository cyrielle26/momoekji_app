import { Box} from "@chakra-ui/react";
import React from "react";
import { PacmanLoader } from "react-spinners";

export const Loading = () => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={{ base: "50%", md: "300px" }}
    >
     <PacmanLoader color="#DD9F64" />
    </Box>
  );
};
