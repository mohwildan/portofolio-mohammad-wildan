import { Container } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import Layout from "../components/Layout/articel";

const Porfolio: NextPage = () => {
  return (
    <Layout title="Porfolio">
      <Container>
        <div>Porfolio</div>
      </Container>
    </Layout>
  );
};

export default Porfolio;
