import { Text } from "@chakra-ui/react";

import { styles } from "./SectionTitle.styles";

import type { SectionTitleProps } from "./SectionTitle.types";

export const SectionTitle = ({
  children,
  variant = "normal",
  ...props
}: SectionTitleProps) => {
  return (
    <Text
      textAlign="center"
      fontWeight="800"
      color="primary.text"
      marginBottom={{
        base: "16px",
        md: "24px"
      }}
      {...styles[variant]}
      {...props}
    >
      {children}
    </Text>
  );
};
