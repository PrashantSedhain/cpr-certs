import { ChakraProvider } from "@chakra-ui/react";
import Home from "./home";

export default function Main() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}
