import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { Heading, Link } from "./components,";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

const styles = {
  global: (props: StyleFunctionProps | Dict<any>) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const components = {
  Heading,
  Link,
};

const colors = {
  pink: {
    50: "#F73D93",
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
};

export const Theme = extendTheme({ components, styles, config, fonts, colors });
