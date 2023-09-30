import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  const isNotfound = isRouteErrorResponse(error);

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading as="h1">Oops</Heading>
        <Text>
          {isNotfound
            ? "This page does not exist."
            : "An unexpected error occurred!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
