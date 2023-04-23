import Testimonials from "@/components/Testimonials";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
    return (
        <ChakraProvider>
            <Testimonials />
        </ChakraProvider>
    )
}
