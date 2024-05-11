import { Text } from "@chakra-ui/react";

import type { SectionSubtitleProps } from "./SectionSubtitle.types";

export const SectionSubtitle = ({
  children,
  ...props
}: SectionSubtitleProps) => {
  return (
    <Text
      textAlign="center"
      fontSize={{
        lg: "20px",
        md: "18px",
        sm: "16px"
      }}
      lineHeight={{
        sm: "24px",
        md: "28px",
        lg: "32px"
      }}
      color="secondary.text"
      {...props}
    >
      {children}
    </Text>
  );
};
