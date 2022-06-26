import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

const Sections: FC<Props> = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      style={{ margin: "2.5rem 0" }}
    >
      {children}
    </motion.div>
  );
};

export default Sections;
