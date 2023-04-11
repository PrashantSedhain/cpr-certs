import { ChakraProvider } from "@chakra-ui/react";
import Home from "./home";
import Courses from "./courses";

export default function Main() {
    return (
        <ChakraProvider>
            <Courses />
        </ChakraProvider>
    )
}
