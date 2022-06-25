import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const ToggleDarkMode = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.div
        key={useColorModeValue("light", "dark")}
        style={{ display: "inline-block" }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="toggle theme"
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          colorScheme={useColorModeValue("purple", "orange")}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ToggleDarkMode;
