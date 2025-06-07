import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInSection({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: false,  // important: allow repeated triggers
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
