import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  props?: any
}

const ButtonMain: FC<Props> = ({ children, props }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" my={4}>
      <Button
        color="white"
        rightIcon={<ChevronRightIcon />}
        bg="pink.50"
        _hover={{ bg: "pink.500" }}
        _active={{ bg: "pink.400" }}
        my="2rem"
      >
        {children}
      </Button>
    </Box>
  );
};

export default ButtonMain;
