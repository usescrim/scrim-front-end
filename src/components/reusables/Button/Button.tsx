import React from "react";

import classNames from "classnames";

import { motion } from "framer-motion";

type containedType =
  | "contained-primary"
  | "contained-secondary"
  | "contained-warning"
  | "contained-error"
  | "contained-success";

type outlinedType =
  | "outlined-primary"
  | "outlined-secondary"
  | "outlined-warning"
  | "outlined-error"
  | "outlined-success";

type standardType =
  | "standard-primary"
  | "standard-secondary"
  | "standard-warning"
  | "standard-error"
  | "standard-success";

type ButtonProps = {
  children?: React.ReactNode;
  variant?: containedType | outlinedType | standardType;
  style?: React.StyleHTMLAttributes<any>;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "right" | "left";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  animated?: boolean;
  loading?: boolean;
};

const Button = ({
  children,
  variant = "contained-primary",
  style,
  className = "",
  icon,
  iconPosition = "left",
  onClick,
  animated = false,
  loading = false,
}: ButtonProps) => {
  return (
    <motion.button
      initial={animated ? { scale: 0.5 } : {}}
      animate={animated ? { scale: 1 } : {}}
      whileHover={animated ? { scale: 1.1 } : {}}
      onClick={onClick}
      className={`flex items-center justify-center space-x-1 p-3 font-semibold text-sm  ${variant} ${className} rounded-[30px]`}
    >
      {icon && (
        <span className={`${loading ? "animate-spin" : ""}`}>{icon}</span>
      )}
      {children && <span>{children}</span>}
    </motion.button>
  );
};

export default Button;
