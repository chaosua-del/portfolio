import { ReactNode } from "react";

import { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

export interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
  variant?: "primary" | "default" | "outline" | "transparent";
  size?: "xl" | "lg" | "md" | "sm";
  block?: boolean;
  danger?: boolean;
  hasArrow?: boolean;
}
