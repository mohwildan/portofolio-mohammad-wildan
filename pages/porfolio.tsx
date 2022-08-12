import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { NextPage } from "next";
import { PorfolioGrid } from "../components/GridItem";
import Layout from "../components/Layout/articel";
import Sections from "../components/Sections";
import jobbss from "../public/figma/jobbss.png";
import mechamaru from "../public/figma/mechamaru.png";
import porfolio1 from "../public/figma/porfolio1.png";
import porfolio2 from "../public/figma/porfolio2.png";
import chatRechat from "../public/figma/chat-rechat.png";
import Porfolio0 from "../public/figma/porfolio.png";
import Collosal from "../public/figma/collosal.png";
import Zeitplan from "../public/figma/Zeitlan.png";
import Lalasia from "../public/figma/lalasia.png"

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
              title="Collosal"
              image={Collosal}
              stack="Nextjs, Chakra UI, Farmer Motions"
              linkLive="http://collosal-two.vercel.app/"
              linkCode="https://github.com/mohwildan/collosal"
            >
              Kami menawarkan desain serta mengembangkan dan kami kirim di hari
              yang sama.
            </PorfolioGrid>
          </Sections>
          <Sections delay={0.1}>
            <PorfolioGrid
              title="Zeitplan"
              image={Zeitplan}
              stack="Nextjs, Chakra UI, Farmer Motions"
              linkLive="https://zeitplan-seven.vercel.app/"
              linkCode="https://github.com/mohwildan/Zeitplan"
            >
              Sebuah cara mudah mengatur jadwal kuliah kamu
            </PorfolioGrid>
          </Sections>
          <Sections delay={0.2}>
            <PorfolioGrid
              title="Lalasia"
              image={Lalasia}
              stack="Nextjs, Chakra UI, Farmer Motions"
              linkLive="https://lalasia-beta.vercel.app/"
              linkCode="https://github.com/mohwildan/-Lalasia"
            >
              Untuk rumah supaya lebih bewarna
            </PorfolioGrid>
          </Sections>
          <Sections delay={0.3}>
            <PorfolioGrid
              title="chat-rechat"
              image={chatRechat}
              stack="Nextjs, Chakra UI, Farmer Motions"
              linkLive="https://chat-rechat.vercel.app"
              linkCode="https://github.com/mohwildan/CHAT-N-RECHAT"
            >
              Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi
              tidak lupa jasa pahlawan!
            </PorfolioGrid>
          </Sections>
          <Sections delay={0.4}>
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
          <Sections delay={0.5}>
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
          <Sections delay={0.6}>
            <PorfolioGrid
              title="Porfolio"
              image={Porfolio0}
              stack="Nextjs, Chakra UI, Farmer Motions"
              linkLive="https://projeck-next-in-sass.netlify.app"
              linkCode="https://github.com/mohwildan/nextjs-sass"
            >
              Porfolio Pribadi Saya
            </PorfolioGrid>
          </Sections>
          <Sections delay={0.7}>
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
          <Sections delay={0.8}>
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
