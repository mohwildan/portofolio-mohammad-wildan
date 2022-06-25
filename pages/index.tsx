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
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: "flex" }} alignItems="center">
          <Box flexGrow={1}>
            <Heading as="h2" fontSize={{ base: "1.7rem", md: "2.5rem" }}>
              Mohammad Wildan{" "}
            </Heading>
            <p>
              Front End Web Developer{" "}
              <span style={{ color: "#F73D93" }}>/</span> Responsif Web Desing
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
                src="data:image/jpeg;base64,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"
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

          <ButtonMain>Download CV</ButtonMain>
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
            Now studying at STIMIK El Rahma University
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
              <SkillText>Javascript</SkillText>
              <SkillText>React js</SkillText>
              <SkillText>Next js</SkillText>
            </Flex>
            <Flex flexDir="column">
              <SkillText>Rest API</SkillText>
              <SkillText>Styled componen</SkillText>
              <SkillText>Chakra UI</SkillText>
            </Flex>
          </Flex>
          <ButtonMain>My Porfolio</ButtonMain>
        </Sections>
        <Sections delay={0.4}>
          <Heading as="h3" variant="sections">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="" target="_blank">
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
              <Link href="" target="_blank">
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
              <Link href="" target="_blank">
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
              <Link href="" target="_blank">
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
