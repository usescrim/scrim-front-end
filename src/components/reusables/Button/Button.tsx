import React from "react";

import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  style?: React.StyleHTMLAttributes<any>;
  className?: string;
  color?: "primary" | "secondary" | "warning" | "error" | "success";
  icon?: React.ReactNode;
  iconPosition?: "right" | "left";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  animated?: boolean;
};

const animations = {
  initial: { scale: 0.5 },
  animate: { scale: 1 },
  whileHover: { scale: 1.1 },
};

const Button = ({
  children,
  variant = "contained",
  style,
  className,
  color = "primary",
  icon,
  iconPosition = "left",
  onClick,
  animated = false,
}: ButtonProps) => {
  const variants = {
    contained: `bg-${color} border-2 border-${color} text-white`,
    outlined: `border-2 border-${color} text-${color}`,
    text: `text-${color}`,
  };
  return (
    <motion.button
      initial={animated ? { scale: 0.5 } : {}}
      animate={animated ? { scale: 1 } : {}}
      whileHover={animated ? { scale: 1.1 } : {}}
      onClick={onClick}
      className={`flex ${
        iconPosition === "left" ? "row" : "flex-row-reverse"
      } items-center space-x-1 py-3 font-semibold px-5 rounded-3xl ${
        variants[variant]
      } ${className}`}
    >
      <span>{icon}</span>
      <span>{children}</span>
    </motion.button>
  );
};

export default Button;
