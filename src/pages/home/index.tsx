import HomeHeroSection from "@/components/HomeHeroSection";
import MissionSection from "@/components/MissionSection";
import Testimonials from "@/components/Testimonials";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
    return (
        <div>
            <HomeHeroSection />
            <MissionSection />
            <Testimonials />
        </div>
    )
}
