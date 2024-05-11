"use client";
import { Icon } from "@chakra-ui/react";

import { ArrowRightIcon } from "@/assets";

import type { ButtonArrowProps } from "./ButtonArrow.types";

export const ButtonArrow = ({ ...props }: ButtonArrowProps) => {
  return (
    <Icon
      as={ArrowRightIcon}
      marginLeft="10px"
      width={{
        base: "10px",
        md: "12px"
      }}
      height={{
        base: "10px",
        md: "12px"
      }}
      marginTop="2px"
      {...props}
    />
  );
};
