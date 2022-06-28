/* eslint-disable react/no-children-prop */
import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Layout from "../components/Layout/articel";
import { useColorModeValue } from "@chakra-ui/react";
import InputAnimations from "../components/InputAnimations";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson, BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <Layout title="contact">
      <Container>
        <form style={{ marginBottom: "2rem" }}>
          <Stack spacing={4} h="calc(100vh - 200px)" justifyContent="center">
            <InputAnimations>
              <Text fontSize="1.1rem">Your Name</Text>
              <InputGroup mt={2}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsPerson fontSize="1.5rem" />}
                />
                <Input
                  size="lg"
                  borderColor={useColorModeValue("violet", "orange")}
                  border="2px solid"
                  focusBorderColor="pink.50"
                  _hover={{ border: "2px solid", borderColor: "pink.50" }}
                  type="text"
                />
              </InputGroup>
            </InputAnimations>
            <InputAnimations delay={0.2}>
              <Text fontSize="1.1rem">Your Email</Text>
              <InputGroup mt={2}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<AiOutlineMail fontSize="1.5rem" />}
                />
                <Input
                  size="lg"
                  borderColor={useColorModeValue("violet", "orange")}
                  border="2px solid"
                  focusBorderColor="pink.50"
                  _hover={{ border: "2px solid", borderColor: "pink.50" }}
                  type="email"
                />
              </InputGroup>
            </InputAnimations>
            <InputAnimations delay={0.3}>
              <Text fontSize="1.1rem">Your Phone</Text>
              <InputGroup mt={2}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsTelephone fontSize="1.5rem" />}
                />
                <Input
                  size="lg"
                  borderColor={useColorModeValue("violet", "orange")}
                  border="2px solid"
                  focusBorderColor="pink.50"
                  _hover={{ border: "2px solid", borderColor: "pink.50" }}
                  type="number"
                />
              </InputGroup>
            </InputAnimations>
            <InputAnimations delay={0.4}>
              <Text fontSize="1.1rem">Message</Text>
              <Textarea
                borderColor={useColorModeValue("violet", "orange")}
                border="2px solid"
                focusBorderColor="pink.50"
                _hover={{ border: "2px solid", borderColor: "pink.50" }}
                resize="none"
                h="300px"
                mt={2}
              />
            </InputAnimations>
            <InputAnimations delay={0.5}>
              <Button
                bg="pink.50"
                color="white"
                _hover={{ bg: "pink.500" }}
                _active={{ bg: "pink.400" }}
              >
                Just Send
              </Button>
            </InputAnimations>
          </Stack>
        </form>
      </Container>
    </Layout>
  );
};

export default Contact;
