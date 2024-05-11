"use client";
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Icon,
  forwardRef,
  InputLeftElement
} from "@chakra-ui/react";

import { ClosedEyeIcon, OpenedEyeIcon } from "@/assets/icons";
import { useBoolean } from "@/hooks";

import { FormField } from "../../server/FormField";

import type { InputProps } from "./Input.types";

const Input = forwardRef(
  (
    {
      label,
      errorMessage,
      size = "md",
      isDisabled,
      isPassword = false,
      icon = null,
      ...props
    }: InputProps,
    ref
  ) => {
    const { value: showPassword, toggle: toggleShowPassword } =
      useBoolean(false);

    return (
      <FormField label={label} errorMessage={errorMessage}>
        <InputGroup>
          {icon ? (
            <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
          ) : null}
          <ChakraInput
            ref={ref}
            type={!isPassword || showPassword ? "text" : "password"}
            size={size}
            isDisabled={isDisabled}
            {...props}
          />
          {isPassword ? (
            <InputRightElement
              cursor={isDisabled ? "not-allowed" : "pointer"}
              onClick={!isDisabled ? toggleShowPassword : undefined}
            >
              <Icon
                as={showPassword ? OpenedEyeIcon : ClosedEyeIcon}
                boxSize="20px"
                color={isDisabled ? "darkGray.200" : "darkGray.300"}
              />
            </InputRightElement>
          ) : null}
        </InputGroup>
      </FormField>
    );
  }
);

export default Input;
