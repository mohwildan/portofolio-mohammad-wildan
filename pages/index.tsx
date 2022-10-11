import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import { BioSections, BioYear } from "../components/Bio";
import ButtonMain from "../components/ButtonMain";
import Layout from "../components/Layout/articel";
import Paragraf from "../components/Paragraf";
import Sections from "../components/Sections";
import SkillText from "../components/SkillText";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io";
import { useRouter } from "next/router";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home: NextPage = () => {
  const { push } = useRouter();
  return (
    <Layout>
      <Container>
        <Box display={{ md: "flex" }} alignItems="center">
          <Box flexGrow={1}>
            <Heading as="h2" fontSize={{ base: "1.7rem", md: "2.5rem" }}>
              Mohammad Wildan
            </Heading>
            <p>
              Front End Web Developer
              <span style={{ color: "#F73D93" }}>/</span> Responsif Web Design
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              w="100px"
              h="100px"
              borderColor="whiteAlpha.400"
              borderWidth={2}
              borderStyle="solid"
              borderRadius="full"
              overflow="hidden"
              display="inline-block"
            >
              <ProfileImage
                src="/96d6f58c-25c8-4563-8925-98b511dcf622.jpeg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>
        <Sections delay={0.1}>
          <Heading as="h3" variant="sections">
            About me
          </Heading>
          <Paragraf>
            I am a front end developer, I am a person who is thirsty for
            knowledge, especially the programming world. I&apos;m currently
            looking for a job to add to my professional experience.
          </Paragraf>
          <a href="/pdf/cv-mohammad-wildan.pdf" download="cv-mohammad-wildan.pdf">
            <ButtonMain>Download CV</ButtonMain>
          </a>
        </Sections>
        <Sections delay={0.2}>
          <Heading variant="sections">Bio</Heading>
          <BioSections>
            <BioYear>2003</BioYear>
            Born in borneo, indonesia
          </BioSections>
          <BioSections>
            <BioYear>2018</BioYear>
            School at SMA Negeri 2 Berau
          </BioSections>
          <BioSections>
            <BioYear>2022</BioYear>
            Now studying at STIMIK El Rahma University.
          </BioSections>
        </Sections>
        <Sections delay={0.3}>
          <Heading as="h3" variant="sections">
            My skill
          </Heading>
          <Flex alignItems="center" wrap="wrap" gap={6}>
            <Flex flexDir="column">
              <SkillText>Html</SkillText>
              <SkillText>Css</SkillText>
              <SkillText>Sass</SkillText>
            </Flex>
            <Flex flexDir="column">
              <SkillText>Typescript</SkillText>
              <SkillText>React js</SkillText>
              <SkillText>Next js</SkillText>
            </Flex>
            <Flex flexDir="column">
              <SkillText>Tailwindcss</SkillText>
              <SkillText>Styled componen</SkillText>
              <SkillText>Chakra UI</SkillText>
            </Flex>
            <Flex flexDir="column">
              <SkillText>Graphql</SkillText>
              <SkillText>Apollo Servern</SkillText>
              <SkillText>Rest Api</SkillText>
            </Flex>
          </Flex>
          <div onClick={() => push("/porfolio")}>
            <ButtonMain>My Porfolio</ButtonMain>
          </div>
        </Sections>
        <Sections delay={0.4}>
          <Heading as="h3" variant="sections">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/mohwildan" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue("purple", "orange")}
                  leftIcon={<IoLogoGithub />}
                >
                  @Mohwildan
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://mobile.twitter.com/wildanmhd_?t=iBktM4wM_n6mKXkSSDhryA&s=09"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue("purple", "orange")}
                  leftIcon={<IoLogoTwitter />}
                >
                  @wildanmhd_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/willdan.mhd/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue("purple", "orange")}
                  leftIcon={<IoLogoInstagram />}
                >
                  @willdan.mhd
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/mohammad-wildan/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue("purple", "orange")}
                  leftIcon={<IoLogoLinkedin />}
                >
                  @Mohammad Wildan
                </Button>
              </Link>
            </ListItem>
          </List>
        </Sections>
      </Container>
    </Layout>
  );
};

export default Home;
