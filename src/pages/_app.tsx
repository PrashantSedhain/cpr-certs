import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showDefaultNav = () => {
    return (
      <>
        {!router.pathname.includes("/admin") ? <Navbar /> : null}
        <Component {...pageProps} />
        {!router.pathname.includes("/admin") ? <Footer /> : null}
      </>
    );
  };
  return (
    <ChakraProvider>
      {router.pathname.includes("/admin") ? (
        <SideBar>
          <Component {...pageProps} />
        </SideBar>
      ) : (
        showDefaultNav()
      )}
      <ToastContainer />
    </ChakraProvider>
  );
}
