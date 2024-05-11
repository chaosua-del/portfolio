import { Button as ChakraButton } from "@chakra-ui/react";

import { ButtonArrow } from "./atoms";

import type { ButtonProps } from "./Button.types";

const Button = ({
  children,
  size = "lg",
  variant = "primary",
  block = false,
  danger = false,
  hasArrow = false,
  ...props
}: ButtonProps) => {
  return (
    <ChakraButton
      size={size}
      variant={variant}
      width={block ? "100%" : "fit-content"}
      {...(danger && {
        background: "red",
        color: "white",
        _hover: { opacity: "0.7" }
      })}
      {...props}
    >
      {children}
      {hasArrow && <ButtonArrow />}
    </ChakraButton>
  );
};

export default Button;
