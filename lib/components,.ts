import { ComponentStyleConfig } from "@chakra-ui/react";

export const Heading: ComponentStyleConfig = {
  variants: {
    "sections": {
      textDecoration: "underline",
      fontSize: 20,
      textUnderlineOffset: 6,
      textDecorationColor: "#F73D93",
      textDecorationThickness: 4,
      marginTop: 3,
      marginBottom: 4,
    },
  },
};
export const Link: ComponentStyleConfig = {
  baseStyle:{
    textUnderlineOffset: 3,

    _hover: {
      textDecorationColor: "#F73D93",
      textDecoration: "underline"
    }
  }
};
