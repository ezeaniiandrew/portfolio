import { motion } from "framer-motion";

const PageTransition = ({
  children,
  className = "col-start-1 -col-end-1 grid grid-cols-12 gap-y-20 md:gap-y-40",
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default PageTransition;
