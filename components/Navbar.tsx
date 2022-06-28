import {
  Box,
  Container,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { FC, ReactNode } from "react";
import Logo from "./Logo";
import { HamburgerIcon } from "@chakra-ui/icons";
import ToggleDarkMode from "./ToggleDarkMode";

interface Props {
  href: string;
  children: ReactNode;
}

const LinkItem: FC<Props> = ({ href, children }) => {
  const router = useRouter();
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link p={2} color={router.asPath === href ? "#F73D93" : ""}>
        {children}
      </Link>
    </NextLink>
  );
};
const Navbar = (props: any) => {
  return (
    <Box
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      position="fixed"
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading as="h1" size="md" letterSpacing="tighter" mr={7}>
          <Logo />
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          w={{ base: "full", md: "auto" }}
          flexGrow={1}
        >
          <LinkItem href="/porfolio">Porfolio</LinkItem>
          <LinkItem href="/contact">Contact</LinkItem>
        </Stack>

        <Box display="flex" alignSelf="flex-end">
          <ToggleDarkMode />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList
                minW="150px"
                bg={useColorModeValue("#ffffff40", "#20202380")}
              >
                 <NextLink href="/">
                  <MenuItem>Home</MenuItem>
                </NextLink>
                <NextLink href="/porfolio">
                  <MenuItem>Porfolio</MenuItem>
                </NextLink>
                <NextLink href="/contact">
                  <MenuItem>Contact</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
