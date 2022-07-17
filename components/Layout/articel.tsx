import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

interface Props {
  children: ReactNode;
  title?: string;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Layout: FC<Props> = ({ children, title }) => {
  const t = `${title} - Mohammad Wildan`;
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
    >
      {title && (
        <Head>
          <title>{t}</title>
        </Head>
      )}
      {children}
    </motion.article>
  );
};

export default Layout;
