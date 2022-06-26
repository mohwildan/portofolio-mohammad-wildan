import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box opacity={0.4} textAlign="center" fontSize="sm">
      &copy; {new Date().getFullYear()} mohammad wildan. All Rights Reserved
    </Box>
  );
};

export default Footer;
