import { ChakraProvider } from "@chakra-ui/react";
import Courses from "./courses";
import Navbar from "@/components/Navbar";

export default function Main() {
    return (
        <ChakraProvider>
            <Courses />
        </ChakraProvider>
    )
}
