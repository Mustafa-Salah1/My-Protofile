"use client";

import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

const fadeInVariants = (y: number): Variants => ({
  hidden: {
    opacity: 0,
    y,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
});

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 32,
  ...rest
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={fadeInVariants(y)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}