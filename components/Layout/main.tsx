import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { FC, ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface Porps {
  children: ReactNode;
}

const Main: FC<Porps> = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Mohammad Wildan - Home</title>
      </Head>
      <Navbar />
      <Container maxW="container.md" pt="8rem">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Main;
