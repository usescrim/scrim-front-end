import React from "react";

import { motion } from "framer-motion";
import Arrow from "../../../Icons/Arrow";

type ButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "white";
  style?: React.StyleHTMLAttributes<any>;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  animated?: boolean;
  loading?: boolean;
  title?: string;
};

const ScrimButton = ({
  children,
  variant = "primary",
  style,
  className = "",
  onClick,
  animated = false,
  loading = false,
  title,
}: ButtonProps) => {
  return (
    <motion.button
      initial={animated ? { scale: 0.5 } : {}}
      animate={animated ? { scale: 1 } : {}}
      whileHover={animated ? { scale: 1.1 } : {}}
      onClick={onClick}
      className={`flex items-center justify-center w-28 space-x-1 p-4 font-semibold text-sm  ${
        variant === "primary"
          ? "bg-primary border-2 border-transparent text-white"
          : "bg-white border-2 border-transparent text-primary"
      } ${className} rounded-[30px]`}
    >
      <Arrow color={variant === "primary" ? "#fff" : "#7000FF"} />
    </motion.button>
  );
};

export default ScrimButton;
