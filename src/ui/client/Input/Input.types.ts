import { InputProps as ChakraInputProps } from "@chakra-ui/react";

import { FormFieldProps } from "../../server/FormField";

export interface InputProps
  extends ChakraInputProps,
    Omit<FormFieldProps, "children"> {
  size?: "lg" | "md";
  isPassword?: boolean;
  icon?: JSX.Element | null;
}
