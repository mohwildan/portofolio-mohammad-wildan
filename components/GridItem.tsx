import {
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";
import { IoLogoGithub } from "react-icons/io";

interface Porps {
  children: ReactNode;
  title: string;
  image: StaticImageData;
  stack: string;
  linkLive: string;
  linkCode: string
}

export const PorfolioGrid: FC<Porps> = ({
  children,
  title,
  image,
  stack,
  linkLive,
  linkCode
}) => {
  return (
    <Box w="100%">
      <Image
        src={image}
        alt={title}
        className="grid-item-image"
        placeholder="blur"
        style={{ borderRadius: "12px" }}
      />
      <Text mt={2} fontSize={20}>
        {title}
      </Text>
      <Flex>
        <Button
          as="a"
          href={linkLive}
          colorScheme="purple"
          mr={3}
          variant="outline"
          size="sm"
        >
          Live
        </Button>
        <Button as="a" href={linkCode} colorScheme="orange" size="sm" leftIcon={<IoLogoGithub />}>
          Code
        </Button>
      </Flex>
      <Box mt={3}>
        <Text fontSize={14}>{children}</Text>
        <Text fontSize="0.8rem" fontWeight="light">
          <span
            style={{
              marginRight: "0.8rem",
              color: "#F73D93",
              fontSize: "1rem",
            }}
          >
            stack:
          </span>
          {stack}
        </Text>
      </Box>
    </Box>
  );
};
