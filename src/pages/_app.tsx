import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ChakraProvider>
      { router.pathname != '/admin' ? <Navbar /> : null }
      <Component {...pageProps} />
      { router.pathname != '/admin' ? <Footer /> : null }
    </ChakraProvider>
  );
}
