import { Icon as ChakraIcon } from "@chakra-ui/react";

import type { IconProps } from "./Icon.types";

export const Icon = ({ icon, ...props }: IconProps) => {
  return <ChakraIcon as={icon} {...props} />;
};
