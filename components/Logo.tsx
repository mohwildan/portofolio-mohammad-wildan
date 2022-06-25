import Link from "next/link";
import styled from "@emotion/styled";
import { Text, useColorModeValue } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Text
          fontWeight="bold"
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily='M PLUS Rounded 1c", sans-serif'
        >Mohammad Wildan</Text>
      </a>
    </Link>
  );
};

export default Logo;
