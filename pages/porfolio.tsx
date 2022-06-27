import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { NextPage } from "next";
import { PorfolioGrid } from "../components/GridItem";
import Layout from "../components/Layout/articel";
import Sections from "../components/Sections";
import jobbss from "../public/figma/jobbss.png";
import mechamaru from "../public/figma/mechamaru.png";
import porfolio1 from "../public/figma/porfolio1.png"
import porfolio2 from "../public/figma/porfolio2.png"

const Porfolio: NextPage = () => {
  return (
    <Layout title="Porfolio">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Porfolio
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Sections>
            <PorfolioGrid
              title="jobbss"
              image={jobbss}
              stack="Nextjs, Chakra UI, Farmer Motions ,
Prisma ORM , Posgres SQL, Next Auth"
              linkLive="https://jobbss.vercel.app"
              linkCode="https://github.com/mohwildan/jobbss-web-porfolio"
            >
              membantu anda untuk mencari pekerjaan di semua bidang
            </PorfolioGrid>
          </Sections>
          <Sections delay={0.1}>
            <PorfolioGrid
              title="MechaMaru"
              image={mechamaru}
              stack="Nextjs, Styled Components"
              linkLive="https://mechamaru.netlify.app"
              linkCode="https://github.com/mohwildan/Next-styled-components"
            >
              menawarkan jasa pembuatan design website yang menarik
            </PorfolioGrid>
          </Sections>
          <Sections delay={0.2}>
            <PorfolioGrid
              title="Porfolio 1"
              image={porfolio1}
              stack="Nextjs, Sass"
              linkLive="https://projeck-next-in-sass.netlify.app"
              linkCode="https://github.com/mohwildan/nextjs-sass"
            >
              Porfolio Pribadi Saya
            </PorfolioGrid>
          </Sections>
          <Sections delay={0.3}>
            <PorfolioGrid
              title="Porfolio 2"
              image={porfolio2}
              stack="Nextjs, Styled Components"
              linkLive="https://mohammad-wildan.netlify.app"
              linkCode="https://github.com/mohwildan/Web-porfolio"
            >
              Porfolio Pribadi Saya
            </PorfolioGrid>
          </Sections>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Porfolio;
